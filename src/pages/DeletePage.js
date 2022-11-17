import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Sidebar from "../components/Sidebar";
import { ButtonContainer,StyledYellowButton,StyledGreenButton } from "../components/styled/ButtonConatiner.styled";
import { Link } from "react-router-dom";

function Delete() {
  return ( 
    <Flex>
    <Sidebar/>
     <Container>
       <h1>Delete</h1>
       <ButtonContainer>
         <Link to={"/delete/mock"}>
         <StyledYellowButton>
         Delete Mock
         </StyledYellowButton>
         </Link>
         <Link to={"/delete/quiz"}>
                
         <StyledGreenButton>
         Delete Quiz
         </StyledGreenButton>
         </Link>
    
        
       </ButtonContainer>
      
     </Container>
   </Flex>
     
   );
}

export default Delete;