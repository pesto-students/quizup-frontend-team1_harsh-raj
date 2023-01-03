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
        <Container>
          <Flex searchbar>
            <h1>My Profile</h1>
            <Link to={"/profile/edit"}>
              <StyledButton>Edit Profile</StyledButton>
            </Link>
          </Flex>
          <ProfileCard />
        </Container>
      </Flex>
    </>
  );
};
