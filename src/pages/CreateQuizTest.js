import { Link } from "react-router-dom";
import { SelectQuizTopic } from "../components/Select";
import AdminSidebar from "../components/AdminSidebar";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, StyledInput } from "../components/styled/Select.styled";

function CreateQuizTest() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Create Quiz</h1>
				<div className="wrapper">
					<ol>
						<li value="1">Choose a Quiz Topic</li>
						<SelectQuizTopic />
						<li>Enter Time Limit</li>
						<StyledInput
							type="number"
							placeholder="Enter Time in Minutes"
							name="Time"
							required
						/>
					</ol>
					<Link to={"/create/quiz/mcq"}>
						<StyledButton>Continue</StyledButton>
					</Link>
				</div>
			</Container>
		</Flex>
	);
}

export default CreateQuizTest;
