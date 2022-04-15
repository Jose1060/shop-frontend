import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import React, { useEffect, useState } from "react";
import {
	getDocs,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase-config";

const Contanier = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
	const [categoriesList, setCategoriesList] = useState([]);
	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, "Categorias"),
			(snapShot) => {
				let list = [];
				snapShot.forEach((doc) => {
					console.log("(ᵔᵕᵔ)/", doc.id, "=>", doc.data());
					list.push({ id: doc.id, ...doc.data() });
				});
				setCategoriesList(list);
			},
			(e) => {
				console.log("(ᵔᵕᵔ)/", e);
			}
		);

		return () => {
			unsub();
		};
	}, []);
	return (
		<Contanier>
			{categoriesList.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Contanier>
	);
};

export default Categories;
