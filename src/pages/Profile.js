import Sidebar from "../components/Sidebar";
import { ProfileCard } from "../components/ProfileCard";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/styled/Button.styled";

import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";

export const Profile = () => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Flex searchbar>
          <h1>Profile</h1>
        </Flex>
        <Flex seeMoreBtn>
          <Link to={"/profile/edit"}>
            <StyledButton>Edit Profile</StyledButton>
          </Link>
        </Flex>
        <Container>
          <ProfileCard />
        </Container>
      </Flex>
    </>
  );
};
