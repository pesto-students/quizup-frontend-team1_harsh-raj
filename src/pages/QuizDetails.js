import { useParams, useNavigate, Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, Titlebar } from "../components/styled/Instructions.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneQuiz, reset } from "../features/quizzes/quizSlice";

function QuizDetails() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { quizzes, isError, message, isLoading } = useSelector(
		(state) => state.quizzes
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getOneQuiz(id));
	}, [dispatch, id, isError, message]);

	const backClickHandler = () => {
		dispatch(reset());
		navigate("/quiz");
	};

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<Titlebar>
				<Flex>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>{quizzes ? quizzes.title + " - Quiz" : ""}</p>
				</Flex>
			</Titlebar>

			<Container>
				<h1>Quiz Details</h1>

				{quizzes ? (
					<ol>
						<li>
							There will be {quizzes.questions ? quizzes.questions.length : ""}{" "}
							questions in this quiz.
						</li>
						<li>
							Time limit for this quiz will be {quizzes.duration} minutes. The
							timer will start as soon as you see the question on you screen.
						</li>
						<li>
							There may be MCQs as well as True/False questions in this quiz.
							Please choose the answer accordingly.
						</li>
						<li>
							The quiz will begin when you complete the entry fee payment by
							clicking on pay button below.
						</li>
						<li>
							Once you start the quiz, you cannot go back or leave it in
							between, you have to attempt all the questions to finish it.
						</li>
						<li>
							You will get 10 points for each correct response. You will get
							points only for questions that you attempt.
						</li>
						<li>
							Each question have 2x and 5x option present. By clicking on 2x,
							you will get 2x points for correct answer but 2x points will be
							deducted if the answer is wrong. Same will be the case for 5x
							button.
						</li>
						<li>{`This quiz has an entry fee of Rs. ${quizzes.price}`}</li>
					</ol>
				) : (
					<h2>Loading...</h2>
				)}

				<StyledButton color="#343E3D" onClick={backClickHandler}>
					Back
				</StyledButton>

				<Link to={"/play"}>
					<StyledButton>Play Now</StyledButton>
				</Link>
			</Container>
		</>
	);
}

export default QuizDetails;
