import { Titlebar } from "../components/styled/Instructions.styled";
import { Flex } from "../components/styled/Flex.styled";
import Infobar from "../components/Infobar";
import { StyledButton } from "../components/styled/Button.styled";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTestResult } from "../features/user/userSlice";
import { reset } from "../features/tests/testSlice";

function MockQuestion() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { test, isError, message } = useSelector((state) => state.tests);
	const { user } = useSelector((state) => state.auth);
	const [mocktest] = useState(test);
	const [currentQues, setCurrentQues] = useState(0);
	const [attempted, setAttempted] = useState(0);
	const [wrong, setWrong] = useState(0);
	const [score, setScore] = useState(0);
	const [selected, setSelected] = useState("");

	const questions = mocktest.questions;

	const testData = {
		email: user.email,
		testId: mocktest._id,
		title: mocktest.title,
		total_questions: questions.length,
		questions_attempted: attempted,
		score: score,
		wrong_answers: wrong,
	};

	const prevHandler = () => {
		if (currentQues === 0) {
			alert("This is the first question");
		} else {
			setCurrentQues(currentQues - 1);
			setSelected("");
		}
	};

	const nextHandler = () => {
		setAttempted(attempted + 1);
		if (questions[currentQues].answer === selected) {
			setScore(score + 5);
		} else {
			setWrong(wrong + 1);
		}
		setSelected("");
		if (currentQues === questions.length - 1) {
			alert("This was the last question. Click on Submit to view results.");
		} else {
			setCurrentQues(currentQues + 1);
		}
	};

	const submitHandler = () => {
		const isSure = window.confirm("Are you sure you want to submit?");
		if (isSure) {
			dispatch(addTestResult(testData));
			navigate("/result");
		}
	};

	const onOptionChange = (e) => {
		setSelected(e.target.value);
	};

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message]);

	return (
		<div style={{ height: "100vh" }}>
			<Titlebar>
				<Flex titlebar>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>{test && test.title} - Mock Test</p>
				</Flex>
			</Titlebar>
			<Flex question>
				<Flex layout="column" buttons>
					<div className="wrapper">
						<h2>Question {currentQues + 1}</h2>
						<div className="question">
							<p>{questions && questions[currentQues].question}</p>
						</div>
						<div className="answers">
							{questions &&
								questions[currentQues].options.map((option, index) => (
									<div key={option._id}>
										<input
											type="radio"
											name="answer"
											id={index}
											value={option}
											onChange={onOptionChange}
											checked={selected === option}
										/>
										<label htmlFor={index}>{option}</label>
									</div>
								))}
						</div>
					</div>
					<Flex btnAlign>
						<div>
							<StyledButton color="#E87121" onClick={prevHandler}>
								Previous
							</StyledButton>
							<StyledButton color="#E87121" onClick={nextHandler}>
								Next
							</StyledButton>
						</div>
						<StyledButton onClick={submitHandler}>Submit</StyledButton>
					</Flex>
				</Flex>
				<Infobar props={questions} />
			</Flex>
		</div>
	);
}

export default MockQuestion;
