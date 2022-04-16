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
	query,
	where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = () => {
	let { id } = useParams();
	const [popularProducts, setPoopularProducts] = useState([]);
	useEffect(() => {
		console.log("(ᵔᵕᵔ)/", id);
		if (id) {
			const unsub = onSnapshot(
				query(collection(db, "Productos"), where("categori", "==", id)),
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
		} else {
			const unsub = onSnapshot(
				collection(db, "Productos"),
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
		}
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
