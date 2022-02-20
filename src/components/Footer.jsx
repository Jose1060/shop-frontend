import {
	Facebook,
	Instagram,
	Mail,
	Phone,
	Room,
	Telegram,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	${mobile({
		flexDirection: "column",
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;

	${mobile({ textAlign: "center" })}
`;
const Desc = styled.p`
	margin: 20px 0px;
	font-weight: bold;

	${mobile({ textAlign: "center" })}
`;
const SocialContainer = styled.div`
	display: flex;

	${mobile({
		alignItems: "center",
		justifyContent: "center",
	})}
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;

	${mobile({
		textAlign: "center",
	})}
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;

	${mobile({
		textAlign: "center",
	})}
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: "#eeee",
	})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;

	${mobile({
		justifyContent: "center",
	})}
`;
const Payment = styled.img`
	width: 10%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo> RyD </Logo>
				<Desc>
					Somos una empresa dedicada a dar soluciones y servicios de tecnologías
					de información y comunicaciones, servicios eléctricos y seguridad
					electrónica; así mismo como la de administración de proyectos y
					procesos de negocio, de una forma diferente y versátil, así mismo
					proveer la educación y entrenamiento en cada una de sus áreas de
					negocio.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="e4405f">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Telegram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Twitter />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Links utiles</Title>
				<List>
					<ListItem>Inicio</ListItem>
					<ListItem>Carrito</ListItem>
					<ListItem>Contacto</ListItem>
					<ListItem>Preguntas frecuentes</ListItem>
					<ListItem>Componentes</ListItem>
					<ListItem>Términos y condiciones</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> Av.Algun lugar 1234
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} />
					+51 912 234 5678
				</ContactItem>
				<ContactItem>
					<Mail style={{ marginRight: "10px" }} />
					RyM@prueba.com
				</ContactItem>
				<Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/556px-Visa_Inc._logo.svg.png" />
			</Right>
		</Container>
	);
};

export default Footer;
