import styled from "styled-components";
import { categories } from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./styles.css";

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ height: "30vh" })}
`;
const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: bold;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Slider autoplay={5000} previousButton={null} nextButton={null}>
				{item.imagenes.map((slide, index) => (
					<div key={index}>
						<Image src={slide} />
					</div>
				))}
			</Slider>
			<Info>
				<Title>{item.nombre}</Title>
				<Link to="/products">
					<Button>SHOP NOW</Button>
				</Link>
			</Info>
		</Container>
	);
};

export default CategoryItem;
