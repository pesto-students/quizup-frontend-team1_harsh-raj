import QuizCard from "./QuizCard";
import { Flex } from "./styled/Flex.styled";
import { StyledSection } from "./styled/Section.styled";
import quizData from "../quizData";
import { StyledButton } from "./styled/Button.styled";

function QuizSection() {
	return (
		<StyledSection>
			<Flex seeMoreBtn>
				<h3>Take a look at these popular quizzes for today...</h3>
				<StyledButton>See More</StyledButton>
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
