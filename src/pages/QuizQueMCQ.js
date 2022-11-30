import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
import QuizQueForm from "../components/QuizQueMCQ";
import { Container } from "../components/styled/QuizQueMCQ";
function QuizQueMCQ() {
	return (
		<>
			<Flex>
				<AdminSidebar />
				<Container>
					<h1>Quiz name</h1>

					<QuizQueForm />

					<Flex searchbar>
						<button style={{ width: "300px" }}> Add another MCQ</button>
						<Link to={"/create/quiz/tf"}>
							<button style={{ width: "300px" }}>
								{" "}
								Add another T/F question
							</button>
						</Link>

						<div>
							<Link to={"/create"}>
								<StyledButton color="rgba(232, 113, 33, 1)">Exit</StyledButton>
							</Link>
							<Link to={"/create"}>
								<StyledButton>Save</StyledButton>
							</Link>
						</div>
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default QuizQueMCQ;
