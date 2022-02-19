import { Facebook } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
`;

const Center = styled.div`
	flex: 1;
`;

const Right = styled.div`
	flex: 1;
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
					<SocialIcon>
						<Facebook />
					</SocialIcon>
					<SocialIcon>
						<TikTok />
					</SocialIcon>
					<SocialIcon>
						<Facebook />
					</SocialIcon>
					<SocialIcon>
						<Facebook />
					</SocialIcon>
					<SocialIcon>
						<Facebook />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center></Center>
			<Right></Right>
		</Container>
	);
};

export default Footer;
