import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import AdminSidebar from "../components/AdminSidebar";
import {
	ButtonContainer,
	StyledYellowButton,
	StyledGreenButton,
} from "../components/styled/ButtonContainer.styled";
import { Link } from "react-router-dom";

function Create() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Create</h1>
				<ButtonContainer>
					<Link to={"/create/mock"}>
						<StyledYellowButton>Create Mock</StyledYellowButton>
					</Link>
					<Link to={"/create/quiz"}>
						<StyledGreenButton>Create Quiz</StyledGreenButton>
					</Link>
				</ButtonContainer>
			</Container>
		</Flex>
	);
}

export default Create;
