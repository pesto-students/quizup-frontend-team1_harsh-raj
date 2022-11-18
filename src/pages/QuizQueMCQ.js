import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
import QuizQueForm from "../components/QuizQueMCQ";
import { Container } from "../components/styled/QuizQueMCQ";
function QuizQueMCQ() {
  return (
    <>
      <Flex>
        <Sidebar />
        <Container>
        <h1>Quiz name</h1>
      
      <QuizQueForm/>
      
      <Link to={"/create"}>
        <StyledButton color="rgba(232, 113, 33, 1)">Exit</StyledButton>
      </Link>
      <Link to={"/create"}>
        <StyledButton>Save</StyledButton>
      </Link>
      </Container>
      </Flex>
    </>
  );
}

export default QuizQueMCQ;
