import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import quizData from "../quizData";
import QuizCard from "../components/QuizCard";

function Quiz() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Explore all Quizzes</h1>
						<Searchbar />
					</Flex>
					<Flex wrap>
						{quizData.map((item, index) => (
							<QuizCard key={index} item={item} />
						))}
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default Quiz;
