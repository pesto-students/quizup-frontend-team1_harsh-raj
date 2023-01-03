import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import {
	MultiplierButtons,
	OptionsContainer,
	QuestionBox,
	QuestionCounter,
} from "../components/styled/QuizQuestion.styled";
import { Logo, LogoText } from "../components/styled/Logo.styled";
import { Container, Timer } from "../components/styled/QuizQuestion.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addQuizResult } from "../features/user/userSlice";
import { reset } from "../features/quizzes/quizSlice";

function QuizQuestion() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { quizzes } = useSelector((state) => state.quizzes);
	const { user } = useSelector((state) => state.auth);
	// // quiz name, total questions, attempted questions, wrong answers, score
	const quiz = quizzes[0];
	const questions = quiz ? quiz.questionsmcq : [];

	const [showResult, setShowResult] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [twoMultiplier, setTwoMultiplier] = useState(false);
	const [fiveMultiplier, setFiveMultiplier] = useState(false);
	const [attempted, setAttempted] = useState(0);
	const [wrong, setWrong] = useState(0);

	const quizResult = {
		email: user.email,
		quizId: quiz._id,
		title: quiz.title,
		total_questions: questions.length,
		questions_attempted: attempted,
		score: score,
		wrong_answers: wrong,
	};

	const twoMultiplierHandler = () => {
		if (twoMultiplier) {
			setTwoMultiplier(false);
			setFiveMultiplier(false);
		} else {
			setTwoMultiplier(true);
			setFiveMultiplier(false);
		}
	};
	const fiveMultiplierHandler = () => {
		if (fiveMultiplier) {
			setFiveMultiplier(false);
			setTwoMultiplier(false);
		} else {
			setFiveMultiplier(true);
			setTwoMultiplier(false);
		}
	};

	const optionClickHandler = (option) => {
		setAttempted(attempted + 1);
		if (option === questions[currentQuestion].answer) {
			if (twoMultiplier) {
				setScore(score + 20);
			} else if (fiveMultiplier) {
				setScore(score + 50);
			} else {
				setScore(score + 10);
			}
		} else {
			setWrong(wrong + 1);
			if (twoMultiplier) {
				setScore(score - 20);
			} else if (fiveMultiplier) {
				setScore(score - 50);
			} else {
				setScore(score - 10);
			}
		}
		setTwoMultiplier(false);
		setFiveMultiplier(false);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

	if (showResult) {
		dispatch(addQuizResult(quizResult));
		navigate("/quizresult");
	}

	useEffect(() => {
		return () => {
			dispatch(reset());
		};
	}, [dispatch]);

	return (
		<Container>
			<Flex searchbar>
				<div style={{ textAlign: "center" }}>
					<p>Time Left</p>
					<Timer>09:41</Timer>
				</div>
				<div>
					<Flex logo>
						<Logo src="/images/logo-gradient.svg" alt="Quizup logo"></Logo>
						<LogoText color="#343E3D">QuizUp</LogoText>
					</Flex>
				</div>
				<div>
					<StyledButton
						wd="100px"
						color="#343E3D"
						onClick={() => {
							currentQuestion === questions.length - 1
								? setShowResult(true)
								: setCurrentQuestion(currentQuestion + 1);
						}}
					>
						Skip
					</StyledButton>
				</div>
			</Flex>
			<MultiplierButtons>
				<button
					className={`btn__2x ${twoMultiplier ? "clicked" : ""}`}
					onClick={twoMultiplierHandler}
				>
					2X
				</button>
				<button
					className={fiveMultiplier ? "clicked" : ""}
					onClick={fiveMultiplierHandler}
				>
					5X
				</button>
			</MultiplierButtons>
			<QuestionBox>
				{questions ? (
					<p>{questions[currentQuestion].question}</p>
				) : (
					<p>Loading...</p>
				)}
			</QuestionBox>
			<OptionsContainer>
				{questions ? (
					questions[currentQuestion].options.map((option, index) => (
						<div
							key={option._id}
							onClick={() => optionClickHandler(option)}
							className={
								index === 1
									? "green"
									: "" || index === 2
									? "blue"
									: "" || index === 3
									? "yellow"
									: ""
							}
						>
							{option}
						</div>
					))
				) : (
					<p>Loading</p>
				)}
			</OptionsContainer>

			<QuestionCounter>
				<Flex searchbar>
					<div>
						{currentQuestion + 1}/{questions.length}
					</div>
					<div>Current Score: {score}</div>
				</Flex>
			</QuestionCounter>
		</Container>
	);
}

export default QuizQuestion;
