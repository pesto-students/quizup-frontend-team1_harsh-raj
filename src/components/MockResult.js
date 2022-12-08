import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, Logotext } from "./styled/Logo.styled";
import { StyledMockResult, Photo } from "./styled/MockResult.styled";

export default function MockResult(props) {
	console.log(props);
	return (
		<div style={{ margin: "40px" }}>
			<Flex logo>
				<Logo src="/images/QuizUp-logo.svg" alt="Quizup logo" />
				<Logotext>QuizUp</Logotext>
			</Flex>
			<h1>Your *Exam name* test results are here...</h1>
			<StyledMockResult>
				<div>
					<p>
						Number of questions = <b>40</b>
					</p>
					<p>
						Number of questions attempted = <b>35</b>
					</p>
					<p>
						Number of wrong answers = <b> 5</b>
					</p>
					<div>
						<p>
							Total score = <b>95/120</b>{" "}
						</p>
					</div>
					<div>
						<p>
							Areas that need improvement are <b>React Hooks</b> and{" "}
							<b>HOCs.</b>
						</p>
					</div>
				</div>

				<Photo src="/images/Result_image.svg" alt="result illustration" />
			</StyledMockResult>
			<Link to={`/`}>
				<StyledButton
					fontclr="#343E3D"
					color="#FFD05A"
					style={{ marginRight: "50px" }}
				>
					Back to Home
				</StyledButton>
			</Link>
			<Link to={"/exams"}>
				<StyledButton color="#343E3D">Take another test</StyledButton>
			</Link>
		</div>
	);
}
