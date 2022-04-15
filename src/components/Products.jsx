import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import {
	getDocs,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase-config";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = () => {
	const [popularProducts, setPoopularProducts] = useState([]);
	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, "Categorias"),
			(snapShot) => {
				let list = [];
				snapShot.forEach((doc) => {
					console.log("(ᵔᵕᵔ)/", doc.id, "=>", doc.data());
					list.push({ id: doc.id, ...doc.data() });
				});
				setPoopularProducts(list);
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
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
