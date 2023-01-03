import { Flex } from "../components/styled/Flex.styled";
import AdminSidebar from "../components/AdminSidebar";
import { SelectMockExam } from "../components/Select";
import { StyledButton } from "../components/styled/Button.styled";
import { Container, StyledInput } from "../components/styled/Select.styled";
import { Link } from "react-router-dom";

function CreateMockTest() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Create a Mock Test</h1>
				<br />
				<ol>
					<li>Choose an Exam</li>
					<SelectMockExam />
					<li>Enter a name for your test</li>
					<StyledInput
						type="text"
						placeholder="Enter test name"
						name="testName"
						required
					/>
					<li>Enter Time Limit</li>
					<StyledInput
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
