import { Titlebar } from "../components/styled/Instructions.styled";
import { Flex } from "../components/styled/Flex.styled";
import Infobar from "../components/Infobar";
import { StyledButton } from "../components/styled/Button.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MockQuestion() {
	const navigate = useNavigate();
	const { test, isError, isLoading, message } = useSelector(
		(state) => state.tests
	);
	const [mocktest, setMocktest] = useState(test);
	const [currentQues, setCurrentQues] = useState(0);

	const questions = mocktest.questions;

	const prevHandler = () => {
		if (currentQues === 0) {
			alert("This is the first question");
		} else {
			setCurrentQues(currentQues - 1);
		}
	};

	const nextHandler = () => {
		if (currentQues === questions.length - 1) {
			alert("This is the last question");
		} else {
			setCurrentQues(currentQues + 1);
		}
	};

	const submitHandler = () => {
		const isSure = window.confirm("Are you sure you want to submit?");
		if (isSure) {
			navigate("/result");
		}
	};

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
	}, [isError, message]);

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
							<div>
								<input type="radio" name="option" id="a" />
								<label htmlFor="a">
									A. {questions && questions[currentQues].options[0]}
								</label>
							</div>
							<div>
								<input type="radio" name="option" id="b" />
								<label htmlFor="b">
									B. {questions && questions[currentQues].options[1]}
								</label>
							</div>
							<div>
								<input type="radio" name="option" id="c" />
								<label htmlFor="c">
									C. {questions && questions[currentQues].options[2]}
								</label>
							</div>
							<div>
								<input type="radio" name="option" id="d" />
								<label htmlFor="d">
									D. {questions && questions[currentQues].options[3]}
								</label>
							</div>
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
