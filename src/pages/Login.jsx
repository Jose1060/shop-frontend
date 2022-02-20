import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.unsplash.com/photo-1644508201017-aef6bb77c458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 25%;
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
	flex-direction: column;

	${mobile({
		justifyContent: "center",
		alignItems: "center",
	})}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;

	${mobile({
		width: "80%",
	})}
`;

const Button = styled.button`
	width: 40%;
	border: 1px solid teal;
	padding: 15px 20px;
	background-color: white;
	color: black;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	margin-bottom: 10px;

	&:hover {
		background-color: teal;
		color: white;
	}

	${mobile({
		width: "60%",
	})}
`;

const Link = styled.a`
	margin: 10px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Inicio de Sesion</Title>
				<Form>
					<Input type="text" placeholder="Email" />
					<Input type="password" placeholder="Contraseña" />
					<Button>Iniciar Sesion</Button>
					<Link>¿No recuerdas tu contraseña?</Link>
					<Link>Crea una nueva cuenta</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
