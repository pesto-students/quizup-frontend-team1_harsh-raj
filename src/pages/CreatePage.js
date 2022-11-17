import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Sidebar from "../components/Sidebar";
import { ButtonContainer,StyledYellowButton,StyledGreenButton } from "../components/styled/ButtonConatiner.styled";
import { Link } from "react-router-dom";

function Create() {
  return ( 
    <Flex>
     <Sidebar/>
      <Container>
        <h1>Create</h1>
        <ButtonContainer>
          <Link to={"/create/mock"}>
          <StyledYellowButton>
          Create Mock
          </StyledYellowButton>
          </Link>
          <Link to={"/create/quiz"}>
                 
          <StyledGreenButton>
          Create Quiz
          </StyledGreenButton>
          </Link>
     
         
        </ButtonContainer>
       
      </Container>
    </Flex>
     
   );
}

export default Create;