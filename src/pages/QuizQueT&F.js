import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
function QuizQueTF() {
  return (
    <>
      <Flex>
        <Sidebar />
        <h1>Quiz name</h1>
      </Flex>
      <Link to={"/create"}>
        <StyledButton color="rgba(232, 113, 33, 1)">Exit</StyledButton>
      </Link>
      <Link to={"/create"}>
        <StyledButton>Save</StyledButton>
      </Link>
    </>
  );
}

export default QuizQueTF;
