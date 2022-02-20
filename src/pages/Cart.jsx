import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;

	${mobile({
		padding: "10px",
	})}
`;

const Title = styled.h1`
	font-weight: bold;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: bold;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
	${mobile({
		display: "none",
	})}
`;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductEsp = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;

	${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: bold;

	${mobile({ marginBottom: "22px" })}
`;

const Hr = styled.div`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;
const SummaryTitle = styled.h1`
	font-weight: bold;
`;
const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "bold"};
	font-size: ${(props) => props.type === "total" && "bold"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: bold;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>Tu Carrito</Title>
				<Top>
					<TopButton>Continuar comprando</TopButton>
					<TopTexts>
						<TopText>Carrito de compras(2)</TopText>
						<TopText>Tu lista de deseados</TopText>
					</TopTexts>
					<TopButton type="filled">Ver mi carrito</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://resource.logitech.com/w_286,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/mobile-video-conferencing.png?v=1" />
								<Details>
									<ProductName>
										<b>Producto:</b> Camara logitech
									</ProductName>
									<ProductId>123456789</ProductId>
									<ProductColor color="black" />
									<ProductEsp>34 pixeles, 1080p</ProductEsp>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$1.000</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/Y/3Y799LA-1_T1622826153.png" />
								<Details>
									<ProductName>
										<b>Producto:</b> Laptop Pavilion HP
									</ProductName>
									<ProductId>123456789</ProductId>
									<ProductColor color="black" />
									<ProductEsp>1TB </ProductEsp>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$1.000</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://images.samsung.com/is/image/samsung/pe-galaxy-tab-s6-lite-p610-sm-p610nzalpeo-dynamicgray-237503460?$720_576_PNG$" />
								<Details>
									<ProductName>
										<b>Producto:</b> Tablet Samsung
									</ProductName>
									<ProductId>123456789</ProductId>
									<ProductColor color="black" />
									<ProductEsp>Thunder Linght</ProductEsp>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$1.000</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Orden</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$3000</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Envio estimado</SummaryItemText>
							<SummaryItemPrice>$30</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Descuento de envio</SummaryItemText>
							<SummaryItemPrice>-$5.9</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$3000</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};
export default Cart;
