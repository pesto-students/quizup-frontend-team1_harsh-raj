import Sidebar from "../components/Sidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";

function CreateMockTest() {
  return (
      
    <Flex>
      <Sidebar/>
      <Container>
        <h1>Create a Mock Test</h1>
        <h3>1. Choose an Exam</h3>
        <h3>2. Choose a Test</h3>
        <h3>3. Enter Time Limit</h3>
      </Container>
    </Flex>

   );
}

export default CreateMockTest;