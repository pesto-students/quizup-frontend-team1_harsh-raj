import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
import QuizQueTFForm from "../components/QuizQueT&F";
import { Container } from "../components/styled/MockQuePanel.styled";

function QuizQueTF() {
	return (
		<>
			<Flex>
				<AdminSidebar />
				<Container>
					<h1>Quiz name</h1>
					<QuizQueTFForm />

					<Flex searchbar>
						<Link to={"/create/quiz/mcq"}>
							<StyledButton add color="#343E3D">
								Add another MCQ
							</StyledButton>
						</Link>
						<Link to={"/create/quiz/tf"}>
							<StyledButton add color="#343E3D">
								Add another T/F question
							</StyledButton>
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

export default QuizQueTF;
