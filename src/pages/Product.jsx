import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;

	${mobile({
		padding: "10px",
		flexDirection: "column",
	})}
`;

const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: scale-down;

	${mobile({
		height: "40vh",
	})}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({
		padding: "30px",
	})}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContanier = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;

	${mobile({
		flexDirection: "column",
		width: "100%",
	})}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;

	${mobile({
		width: "80%",
		marginBottom: "20px",
		justifyContent: "start",
	})}
`;
const FilterTitle = styled.span`
	margin-right: 20px;
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin-right: 10px;
	cursor: pointer;

	${mobile({
		width: "23.58px",
		height: "23.58px",
	})}
`;
const FilterEsp = styled.select`
	padding: 5px;
`;
const FilterEspOption = styled.option``;

const AddContainer = styled.div`
	width: 75.5%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	margin-right: 20px;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: transparent;
	cursor: pointer;
	font-weight: bolder;
	letter-spacing: 1px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: teal;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/Y/3Y799LA-1_T1622826153.png" />
				</ImgContainer>
				<InfoContainer>
					<Title>Pavilion Laptop</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
						quisquam consequuntur optio alias totam, esse illum iusto harum
						cumque ullam nostrum autem officiis eveniet quos vero reprehenderit
						ipsum, debitis id?
					</Desc>
					<Price>$ 20</Price>
					<FilterContanier>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="white" />
							<FilterColor color="red" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Memoria</FilterTitle>
							<FilterEsp>
								<FilterEspOption>1TB</FilterEspOption>
								<FilterEspOption>2TB</FilterEspOption>
								<FilterEspOption>3TB</FilterEspOption>
							</FilterEsp>
						</Filter>
					</FilterContanier>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>Añadir al carrito</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
