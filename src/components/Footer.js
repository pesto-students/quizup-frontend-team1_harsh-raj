import { LogoContainer, SocialContainer } from "./LogoContainer"
import SocialIcons from "./SocialIcons"
// import { Container } from "./styles/Container.styled"
import { FlexContainer } from "./styles/FlexContainer.styled"
import { StyledFooter } from "./styles/Footer.styled"
import { LogoDiv, LogoImg } from "./styles/Header.styled"
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { SideContainer } from "./styles/SideContainer.styled"


export default function Footer() {
    return (
        <StyledFooter>
            {/* <Container> */}
            <LogoContainer>
                <LogoDiv href=""><LogoImg src='./images/QuizUp-logo.svg' alert="Quiz" /><span>QuizUp</span></LogoDiv>

                <SocialContainer><SocialIcons /></SocialContainer>
            </LogoContainer>
            <FlexContainer>
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

            </FlexContainer>
            <SideContainer>
                <ul>
                    <h3>Contact Us</h3>
                    <p>If you have any queries or feedback, please contact us an</p>
                    <div><BsFillTelephoneFill color="#FFD05A" /><p>+91999999999</p></div>
                    <div><BsFillEnvelopeFill color="#FFD05A" /><p>care@quizup.com</p></div>
                </ul>
            </SideContainer>
            {/* </Container> */}
        </StyledFooter>
    )
}
