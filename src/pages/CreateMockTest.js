import { Flex } from "../components/styled/Flex.styled";
import AdminSidebar from "../components/AdminSidebar";
import { SelectMockExam, SelectMockTest } from "../components/Select";
import { StyledButton } from "../components/styled/Button.styled";
import { Container, StyledInputTime } from "../components/styled/Select.styled";
import { Link } from "react-router-dom";

function CreateMockTest() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Create a Mock Test</h1>
				<br />
				<ol>
					<li value="1">Choose an Exam</li>
					<SelectMockExam />
					<li>Choose a Test</li>
					<SelectMockTest />
					<li>Enter Time Limit</li>
					<StyledInputTime
						type="number"
						placeholder="Enter Time in Minutes"
						name="Time"
						required
					/>
				</ol>
				<Link to={"/create/mock/question"}>
					<StyledButton>Continue</StyledButton>
				</Link>
			</Container>
		</Flex>
	);
}

export default CreateMockTest;
