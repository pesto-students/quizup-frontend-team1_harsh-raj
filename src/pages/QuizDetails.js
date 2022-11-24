import { Link, useParams } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, Titlebar } from "../components/styled/Instructions.styled";
import quizData from "../quizData";

function QuizDetails() {
	const { id } = useParams();
	const quiz = quizData.filter((quiz) => quiz.id === id)[0];

	return (
		<>
			<Titlebar>
				<Flex>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>{`${quiz.name} Quiz`}</p>
				</Flex>
			</Titlebar>

			<Container>
				<h1>Quiz Details</h1>

				<ol>
					<li>There will be 20 multiple choice questions in this quiz.</li>
					<li>
						Time limit for this quiz will be 20 minutes. The timer will start as
						soon as you see the question on you screen.
					</li>
					<li>
						There may be multiple choice as well as True/False questions in this
						quiz. Please choose the answer accordingly.
					</li>
					<li>
						The quiz will begin when you complete the entry fee payment by
						clicking on pay button below.
					</li>
					<li>
						Once you start the quiz, you cannot go back or leave it in between,
						you have to attempt all the questions to finish it.
					</li>
					<li>
						You will get 10 points for each correct response. You will get
						points only for questions that you attempt.
					</li>
					<li>
						Each question have 2x and 5x option present. By clicking on 2x, you
						will get 2x points for correct answer but 2x points will be deducted
						if the answer is wrong. Same will be the case for 5x button.
					</li>
					<li>{`This quiz has an entry fee of Rs ${quiz.price}.`}</li>
				</ol>
				<Link to={"/quiz"}>
					<StyledButton color="#343E3D">Back</StyledButton>
				</Link>

				<StyledButton>Pay Entry Fee</StyledButton>
			</Container>
		</>
	);
}

export default QuizDetails;
