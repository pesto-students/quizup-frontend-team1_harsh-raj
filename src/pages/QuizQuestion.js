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

function QuizQuestion() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { quizzes, isLoading, message, isError } = useSelector(
		(state) => state.quizzes
	);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [twoMultiplier, setTwoMultiplier] = useState(false);
	const [fiveMultiplier, setFiveMultiplier] = useState(false);

	const quiz = quizzes[0];
	console.log(quiz);

	const questions = quiz ? quiz.questionsmcq : [];

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
	}, [isError, message]);

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
		if (currentQuestion === questions.length - 1) {
			navigate("/result");
		} else {
			if (option === questions[currentQuestion].answer) {
				if (twoMultiplier) {
					setScore(score + 20);
				} else if (fiveMultiplier) {
					setScore(score + 50);
				} else {
					setScore(score + 10);
				}
			} else {
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
			setCurrentQuestion(currentQuestion + 1);
		}
	};

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
								? navigate("/result")
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
				{questions[currentQuestion].options.map((option, index) => (
					<>
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
					</>
				))}
			</OptionsContainer>
			<QuestionCounter>
				<div>{score}</div>
				{currentQuestion + 1}/{questions.length}
			</QuestionCounter>
		</Container>
	);
}

export default QuizQuestion;
