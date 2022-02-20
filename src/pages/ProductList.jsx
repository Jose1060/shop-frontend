import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.div`
	margin: 20px;
`;

const FilterContanier = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
`;

const FilterText = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-right: 20px;
`;

const Select = styled.select`
	padding: 10px;
	margin: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Electronicos</Title>
			<FilterContanier>
				<Filter>
					<FilterText>Componenetes de PC</FilterText>
					<Select>
						<Option disabled selected>
							Componente
						</Option>
						<Option>CPU</Option>
						<Option>GPU</Option>
						<Option>RAM</Option>
						<Option>Motherboard</Option>
						<Option>Storage</Option>
						<Option>Case</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Marca
						</Option>
						<Option>Gigabyte</Option>
						<Option>MSI</Option>
						<Option>AMD</Option>
						<Option>Intel</Option>
						<Option>Kingston</Option>
						<Option>Corsair</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Fecha
						</Option>
						<Option>Lo mas nuevo</Option>
						<Option>Hace 1 mes</Option>
						<Option>Hace 6 meses</Option>
						<Option>Hace 1 año</Option>
						<Option>Hace 2 años</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Clasificar Productos</FilterText>
					<Select>
						<Option disabled selected>
							Ordenar por
						</Option>
						<Option>Precio (asc)</Option>
						<Option>Precio (desc)</Option>
					</Select>
				</Filter>
			</FilterContanier>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
