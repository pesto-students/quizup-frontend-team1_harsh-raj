import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import AdminSidebar from "../components/AdminSidebar";
import {
	ButtonContainer,
	StyledYellowButton,
	StyledGreenButton,
} from "../components/styled/ButtonContainer.styled";
import { Link } from "react-router-dom";

function Delete() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Delete</h1>
				<ButtonContainer>
					<Link to={"/delete/mock"}>
						<StyledYellowButton>Delete Mock</StyledYellowButton>
					</Link>
					<Link to={"/delete/quiz"}>
						<StyledGreenButton>Delete Quiz</StyledGreenButton>
					</Link>
				</ButtonContainer>
			</Container>
		</Flex>
	);
}

export default Delete;
