import styled from "styled-components";

const Container = styled.div`
	height: 40px;
	color: black;
	background-color: #37c281;
	border-top: 1px solid lightgray;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;

const cLeft = styled.div``;

const itemFilter = styled.div`
	padding: 5px;
`;

const contentItemsFilter = styled.div`
	display: flex;
	justify-content: space-between;
`;

const cRight = styled.div``;

const cCenter = styled.div``;

const Optionsbar = () => {
	return (
		<Container>
			<Wrapper>
				<cLeft>
					<contentItemsFilter>
						<itemFilter>Productos</itemFilter>
						<itemFilter>Servicios</itemFilter>
					</contentItemsFilter>
				</cLeft>
				<cCenter>centro</cCenter>
				<cRight>derecha</cRight>
			</Wrapper>
		</Container>
	);
};

export default Optionsbar;
