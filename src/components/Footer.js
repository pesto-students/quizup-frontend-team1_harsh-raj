import { LogoContainer, SocialContainer } from "./LogoContainer"
import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"
import { Logo, LogoImg } from "./styles/Header.styled"
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <LogoContainer>
                    <Logo href=""><LogoImg src='./images/QuizUp-logo.svg' /><span>QuizUp</span></Logo>
                    
                    <SocialContainer><SocialIcons /></SocialContainer>
                </LogoContainer>
                <Flex>
                    <ul>
                        <h3>Site Map</h3>
                        <li>About us</li>
                        <li>Stats</li>
                        <li>Press</li>
                        <li>Content</li>
                    </ul>
                    <ul>
                        <h3>Quick Links</h3>
                        <li>Help</li>
                        <li>Careers</li>
                        <li>Assets</li>
                    </ul>
                    <ul>
                        <h3>Support</h3>
                        <li>FAQ's</li>
                        <li>Privacy Policy</li>
                        <li>Teams and Conditions</li>
                    </ul>
                    <ul>
                        <h3>Contact Us</h3>
                        <p>If you have any queries or feedback, olease contact us on</p>
                        <div><BsFillTelephoneFill/><p>+91999999999</p></div>
                        <div><BsFillEnvelopeFill/><p>care@quizup.com</p></div>
                        
                  </ul>



                </Flex>
            </Container>
        </StyledFooter>
    )
}
