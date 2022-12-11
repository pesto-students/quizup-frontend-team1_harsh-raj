import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";
import { StyledMockResult, Photo } from "./styled/MockResult.styled";
import { Container } from "./styled/Container.styled";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/user/userSlice";
import MoonLoader from "react-spinners/MoonLoader";

export default function MockResult() {
	const dispatch = useDispatch();
	const { testResult, isLoading } = useSelector((state) => state.user);

	useEffect(() => {
		return () => {
			dispatch(reset());
		};
	});

	return (
		<Container>
			<Flex logo>
				<Logo src="/images/logo-gradient.svg" alt="Quizup logo" />
				<LogoText color="#343E3D">QuizUp</LogoText>
			</Flex>
			{testResult ? (
				<>
					<h1>Your {testResult.title} test results are here...</h1>
					<StyledMockResult>
						<div>
							<p>
								Number of questions = <b>{testResult.total_questions}</b>
							</p>
							<p>
								Number of questions attempted ={" "}
								<b>{testResult.questions_attempted}</b>
							</p>
							<p>
								Number of wrong answers = <b> {testResult.wrong_answers}</b>
							</p>
							<div>
								<p>
									Total score ={" "}
									<b>
										{testResult.score + "/" + testResult.total_questions * 5}
									</b>{" "}
								</p>
							</div>
						</div>

						<Photo src="/images/Result_image.svg" alt="result illustration" />
					</StyledMockResult>
				</>
			) : (
				<MoonLoader loading={isLoading} size={30} color="#343E3D" />
			)}

			<Link to={`/dashboard`}>
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
		</Container>
	);
}
