import { StyledMockCard, CardContainer } from "./styles/MockCard.styled";

function CardBox() {
	return (
		<CardContainer>
			<StyledMockCard>
				<h2>Mock Tests</h2>
				<p>
					QuizUp has a wide variety of mock test for various different goverment
					exams
				</p>
			</StyledMockCard>
			<StyledMockCard>
				<h2>Quizzes</h2>
				<p>Fun and exciting quizzes to immerse you in the joy of learning</p>
			</StyledMockCard>
			<StyledMockCard>
				<h2>Rewards</h2>
				<p>
					Now get paid to test your skills. Get exciting prizes by participating
					in our quizzes.
				</p>
			</StyledMockCard>
		</CardContainer>
	);
}

export default CardBox;
