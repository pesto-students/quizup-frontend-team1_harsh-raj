import { Link } from "react-router-dom";
import { EditPofileCard } from "../components/EditPofileCard";
import Sidebar from "../components/Sidebar";
import { StyledButton } from "../components/styled/Button.styled";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";

export const EditProfile = () => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Flex searchbar>
          <h1>Edit Profile</h1>
        </Flex>
        <Flex seeMoreBtn>
          <Link to={"/profile"}>
            <StyledButton>SAVE</StyledButton>
          </Link>
        </Flex>

        <Container>
          <EditPofileCard />
        </Container>
      </Flex>
    </>
  );
};
