import { Flex } from "../components/styled/Flex.styled";
import Sidebar from "../components/Sidebar";
import { SelectMockExam, SelectMockTest } from "../components/Select";
import { StyledButton } from "../components/styled/Button.styled";
import { Container, StyledInputTime } from "../components/styled/Select.styled";
import { Link } from "react-router-dom";

function CreateMockTest() {
  return (
    <Flex>
      <Sidebar />
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
            type="text"
            placeholder="Enter Time in Minutes"
            name="Time"
          />
        </ol>
        <Link to={"/create/mock/mockquestionpanel"}>
        <StyledButton>Continue</StyledButton>
        </Link>
        
      </Container>
    </Flex>
  );
}

export default CreateMockTest;
