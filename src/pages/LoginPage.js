import { LoginTitle } from "../components/LoginTitle";
import { LoginContainer } from "../components/LoginContainer";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Flex>
        <Container>
          <LoginTitle />
          <LoginContainer />
          <Link to={"/"}>
            <StyledButton>Back to Home</StyledButton>
          </Link>
        </Container>
      </Flex>
    </>
  );
}
