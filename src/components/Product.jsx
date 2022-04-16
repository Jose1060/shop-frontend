import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./styles.css";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0169, 223, 191, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.7s ease-in-out;
`;

const Contanier = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: #5db685;
	position: absolute;
`;
const Image = styled.img`
	width: 75%;
	height: 100%;
	z-index: 2;

	object-fit: cover;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #5db685;
		color: white;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Contanier>
			<Circle />
			<Image src={item.imagenes[0]} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>

				<Icon>
					<FavoriteBorderOutlined />
				</Icon>

				<Link to={`/products/${item.id}`}>
					<Icon>
						<SearchOutlined />
					</Icon>
				</Link>
			</Info>
		</Contanier>
	);
};

export default Product;
