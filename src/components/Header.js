import { Styledheader, Nav, Logo, Rightcontainer, Menu, MenuLink, Image, LogoImg } from "./styles/Header.styled"
import { Button, GetButton } from "./styles/Button.styled"
import { useState } from "react"
import {Flex} from './styles/Flex.styled'


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styledheader>
      <Nav>
        
        <Logo href=""><LogoImg src='./images/QuizUp-logo.svg' /><span>QuizUp</span></Logo>
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
      <Flex>
        <div>
          <h3>100% SATISFACTION GURANTEE</h3>

          <h1>Test your skills digitally from the comfort of your home.</h1>
          <p>Quality Mock tests and competitive
            Quizzes, now accessible at the click of a button.
          </p>

          <GetButton>Get Started For Free</GetButton>
        </div>

        <Image src='./images/Hero image.svg' alt='' />
      </Flex>
    </Styledheader>
  )
}
