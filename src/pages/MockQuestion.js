import { Titlebar } from "../components/styled/Instructions.styled";
import { Flex } from "../components/styled/Flex.styled";
import Infobar from "../components/Infobar";
import { StyledButton } from "../components/styled/Button.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MockQuestion() {
	const { test, isError, isLoading, message } = useSelector(
		(state) => state.tests
	);
	const [mocktest, setMocktest] = useState(test);

	const questions = mocktest.questions;

	const [currentQues, setCurrentQues] = useState(0);

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
							<StyledButton
								color="#E87121"
								// onClick={setCurrentQues(currentQues - 1)}
							>
								Previous
							</StyledButton>
							<StyledButton
								color="#E87121"
								// onClick={questions && setCurrentQues(currentQues + 1)}
							>
								Next
							</StyledButton>
						</div>
						<StyledButton>Submit</StyledButton>
					</Flex>
				</Flex>
				<Infobar props={questions} />
			</Flex>
		</div>
	);
}

export default MockQuestion;
