import QuizCard from "./QuizCard";
import { Flex } from "./styled/Flex.styled";
import { StyledSection } from "./styled/Section.styled";
import quizData from "../quizData";
import { StyledButton } from "./styled/Button.styled";
import { Link } from "react-router-dom";

function QuizSection() {
	return (
		<StyledSection>
			<Flex seeMoreBtn>
				<h3>Take a look at these popular quizzes for today...</h3>
				<Link to={"/quiz"}>
					<StyledButton>See More</StyledButton>
				</Link>
			</Flex>
			<Flex>
				{quizData.slice(0, 5).map((item, index) => (
					<QuizCard key={index} item={item} />
				))}
			</Flex>
		</StyledSection>
	);
}

export default QuizSection;
