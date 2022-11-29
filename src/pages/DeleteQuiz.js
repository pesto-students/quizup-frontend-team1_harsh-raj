import AdminSidebar from "../components/AdminSidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";

function DeleteQuiz() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Delete Quiz</h1>
			</Container>
		</Flex>
	);
}

export default DeleteQuiz;
