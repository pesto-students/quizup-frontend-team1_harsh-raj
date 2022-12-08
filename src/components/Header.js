import { Styledheader, Nav, Rightcontainer, Menu, MenuLink, Image, Logo } from "./styles/Header.styled"
import { Button, GetButton } from "./styles/Button.styled"
import { useState } from "react"
import { FlexContainer } from './styles/FlexContainer.styled'
import { Flex } from "./styled/Flex.styled";
import { LogoImg, Logotext } from "./styled/Logo.styled";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styledheader>
      <Nav>

        {/* <Logo href=""><LogoImg src='./images/QuizUp-logo.svg' /><span>QuizUp</span></Logo> */}
        <Logo>
          <Flex logo>
            <LogoImg src="./images/QuizUp-logo.svg" alt="Quizup logo" sizes="50px" />
            <Logotext >QuizUp</Logotext>
          </Flex>
        </Logo>

        <Rightcontainer onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Rightcontainer>
        <Menu isOpen={isOpen}>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Features</MenuLink>
          <MenuLink href="">Pricing</MenuLink>
          <MenuLink href="">Contact Us</MenuLink>
          <Button>Login</Button>
        </Menu>
      </Nav>
      <FlexContainer>
        <div>
          <h3>100% SATISFACTION GURANTEE</h3>

          <h1>Test your skills digitally from the comfort of your home.</h1>
          <p>Quality Mock tests and competitive
            Quizzes, now accessible at the click of a button.
          </p>

          <GetButton>Get Started For Free</GetButton>
        </div>

        <span>
          <Image src='./images/Hero image.svg' alt='' />
        </span>
      </FlexContainer>
    </Styledheader>
  )
}
