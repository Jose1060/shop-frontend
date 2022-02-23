import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 60px;

	${mobile({ height: "50px" })}
`;

// Left

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ padding: "10px 0px" })}
`;

const Languages = styled.span`
	font-size: 14px;
	cursor: pointer;

	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;

	${mobile({ width: "50px" })}
`;

// Center
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;

// Right
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;

	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mobile({ justifyContent: "center", flex: 2 })}
`;

function Navbar() {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Languages>ES</Languages>
					<SearchContainer>
						<Input placeholder="Buscar" />
						<Search style={{ color: "green", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>RyM</Logo>
				</Center>
				<Right>
					<Link to="/register">
						<MenuItem>Register</MenuItem>
					</Link>
					<Link to="/login">
						<MenuItem>Sign in</MenuItem>
					</Link>
					<MenuItem>
						<Badge badgeContent={4} color="success">
							<Link to="/cart">
								<ShoppingCartOutlined />
							</Link>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
}

export default Navbar;
