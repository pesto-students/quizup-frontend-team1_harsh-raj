import { Titlebar } from "../components/styled/Instructions.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Infobar from "../components/Infobar";

function MockQuestion() {
	return (
		<>
			<Titlebar>
				<Flex titlebar>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>SSC CGL - Mock Test</p>
				</Flex>
			</Titlebar>
			<Flex>
				<Container>
					<div>Question div</div>
				</Container>
				<Infobar />
			</Flex>
		</>
	);
}

export default MockQuestion;
