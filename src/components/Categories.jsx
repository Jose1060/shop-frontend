import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Contanier = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

const Categories = () => {
	return (
		<Contanier>
			{categories.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Contanier>
	);
};

export default Categories;
