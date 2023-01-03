import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";
import { StyledMockResult, Photo } from "./styled/MockResult.styled";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/user/userSlice";
import MoonLoader from "react-spinners/MoonLoader";

export default function QuizResult() {
	const dispatch = useDispatch();

	const { quizResult, isLoading, message, isError } = useSelector(
		(state) => state.user
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message]);

	if (isLoading) {
		return (
			<div className="result-loading">
				<MoonLoader loading={isLoading} size={30} color="#343E3D" />
			</div>
		);
	}

	return (
		<>
			{quizResult === null ? (
				<Container>
					<h2>Sorry! There seems to be an error...</h2>
					<Link to={"/dashboard"}>
						<StyledButton>Back to Home</StyledButton>
					</Link>
				</Container>
			) : (
				<Container>
					<Flex logo>
						<Logo src="/images/logo-gradient.svg" alt="Quizup logo" />
						<LogoText color="#343E3D">QuizUp</LogoText>
					</Flex>
					<h1>Your {quizResult.title} results are here...</h1>
					<StyledMockResult>
						<div>
							<p>
								Number of questions = <b>{quizResult.total_questions}</b>
							</p>
							<p>
								Number of questions attempted ={" "}
								<b>{quizResult.questions_attempted}</b>
							</p>
							<p>
								Number of wrong answers = <b>{quizResult.wrong_answers}</b>
							</p>
							<div>
								<p>
									Final score = <b>{quizResult.score}</b>{" "}
								</p>
							</div>
						</div>
						<div>
							<Photo src="/images/Result_image.svg" alt="result illustration" />
						</div>
					</StyledMockResult>
					<Link to="/dashboard">
						<StyledButton
							color="#FFD05A"
							fontclr="#343E3D"
							style={{ marginRight: "30px" }}
						>
							Back to Home
						</StyledButton>
					</Link>
					<Link to="/quiz">
						<StyledButton color="#343E3D">Play again</StyledButton>
					</Link>
				</Container>
			)}
		</>
	);
}
