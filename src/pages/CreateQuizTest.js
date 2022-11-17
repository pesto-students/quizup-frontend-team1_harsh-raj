import Sidebar from "../components/Sidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";

function CreateQuizTest() {
  return (
      
    <Flex>
      <Sidebar/>
      <Container>
        <h1>Create Quiz</h1>
        <h3>1. Choose a Quiz Topic</h3>
        <h3>2. Enter Time Limit</h3>
      </Container>
    </Flex>

   );
}

export default CreateQuizTest;