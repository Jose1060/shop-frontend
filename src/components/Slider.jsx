import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: #069c90;
	position: relative;
	overflow: hidden;

	${mobile({
		height: "85vh",
	})}
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: teal;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1.5s;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
	height: 100%;
`;

const Image = styled.img`
	height: 80%;

	${mobile({
		height: "100%",
		objectFit: "cover",
	})}
`;

const InfoContainer = styled.div`
	padding: 50px;
	${(props) =>
		props.bg &&
		mobile({
			position: "absolute",
			backgroundColor: "#" + props.bg,
			bottom: 0,
		})}
`;

const Title = styled.h1`
	font-size: 70px;

	${mobile({ fontSize: "20px" })}
`;
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined style={{ color: "white" }} />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item, index) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer bg={item.bg}>
							<Title>{item.title}</Title>
							<hr />
							<Desc>{item.desc}</Desc>
							<Button>{item.buttonInfo}</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined style={{ color: "white" }} />
			</Arrow>
		</Container>
	);
};

export default Slider;
