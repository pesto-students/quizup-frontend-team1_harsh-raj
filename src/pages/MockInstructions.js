import { useParams } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, Titlebar } from "../components/styled/Instructions.styled";
// import examData from "../examData";

function MockInstructions() {
	const { id } = useParams();
	console.log(id);

	return (
		<>
			<Titlebar>
				<Flex>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>SSC CGL - Mock Test</p>
				</Flex>
			</Titlebar>

			<Container>
				<h1>Instructions</h1>

				<ol>
					<li>There will be 40 multiple choice questions in this test.</li>
					<li>
						There will be two sections: Quant and Verbal having 20 questions
						each. You can jump between sections and attempt questions in any
						order.
					</li>
					<li>
						The questions have marking scheme as follows: 3 marks for each
						correct answer and deduction of 2 marks for each wrong answer.
					</li>
					<li>
						There will be a time limit of 60 minutes to attempt this test. The
						time will start when you click the Start button below.
					</li>
					<li>
						Once you start the test, you cannot go back or leave the test in
						between, you have to submit the exam to finish it.
					</li>
					<li>Some more instructions...</li>
				</ol>
				<StyledButton color="#343E3D">Back</StyledButton>

				<StyledButton>Start</StyledButton>
			</Container>
		</>
	);
}

export default MockInstructions;
