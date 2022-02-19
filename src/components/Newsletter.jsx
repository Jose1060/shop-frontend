import { SendOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Contanier = styled.div`
	height: 60vh;
	background-color: #f5fbfd;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`;
const Description = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;
const InputContanier = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid #e6e6e6;
`;
const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: white;
`;

const Newsletter = () => {
	return (
		<Contanier>
			<Title>Actualizate con nosotros</Title>
			<Description>
				Obten actualizaciones tu tambien de tus productos favoritos
			</Description>
			<InputContanier>
				<Input placeholder="Tu Correo" />
				<Button>
					<SendOutlined />
				</Button>
			</InputContanier>
		</Contanier>
	);
};
export default Newsletter;
