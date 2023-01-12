import { useParams, useNavigate, Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, Titlebar } from "../components/styled/Instructions.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, getTest } from "../features/tests/testSlice";
import MoonLoader from "react-spinners/MoonLoader";

function MockInstructions() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { id } = useParams();
	const { test, isError, isLoading, message } = useSelector(
		(state) => state.tests
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getTest(id));
	}, [dispatch, id, isError, message]);

	const backClickHandler = () => {
		dispatch(reset());
		navigate("/exams");
	};

	return (
		<>
			<Titlebar>
				<Flex>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>{test.title}</p>
				</Flex>
			</Titlebar>

			<Container>
				<h1>Instructions</h1>

				{isLoading ? (
					<MoonLoader loading={isLoading} size={30} color="#343E3D" />
				) : (
					<ol>
						<li>
							There will be {test.questions && test.questions.length} multiple
							choice questions in this test.
						</li>
						<li>
							For each correct response, you will get 5 points. There is no
							negative marking.
						</li>
						<li>
							There will be a time limit of {test.duration} minutes to attempt
							this test. The time will start when you click the Start button
							below.
						</li>
						<li>
							Once you start the test, you cannot go back or leave the test in
							between, you have to submit the exam to finish it.
						</li>
						<li>
							Once you are done with the test, please click on the Submit button
							to proceed further to the results.
						</li>
					</ol>
				)}

				<StyledButton color="#343E3D" onClick={backClickHandler}>
					Back
				</StyledButton>
				<Link to={"/start"}>
					<StyledButton>Start</StyledButton>
				</Link>
			</Container>
		</>
	);
}

export default MockInstructions;
