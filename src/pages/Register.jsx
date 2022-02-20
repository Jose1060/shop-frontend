import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.unsplash.com/photo-1618504126228-eaf8e71dc5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: #fff;

	${mobile({
		width: "75%",
	})}
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 300;

	${mobile({
		textAlign: "center",
		padding: "20px 0px",
	})}
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;

	${mobile({
		justifyContent: "center",
		alignItems: "center",
	})}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px;
`;

const Button = styled.button`
	width: 40%;
	border: 1px solid teal;
	padding: 15px 20px;
	background-color: white;
	color: black;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: teal;
		color: white;
	}

	${mobile({
		width: "60%",
	})}
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Register</Title>
				<Form>
					<Input type="text" placeholder="Nombre" />
					<Input type="text" placeholder="Apellidos" />
					<Input type="text" placeholder="Email" />
					<Input type="password" placeholder="Contraseña" />
					<Input type="password" placeholder="Confima Contraseña" />
					<Agreement>
						Al crear esta cuenta. Yo acepto los <b>Términos y condiciones</b>
					</Agreement>
					<Button>Registrarme</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
