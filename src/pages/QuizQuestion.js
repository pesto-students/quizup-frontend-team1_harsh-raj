import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import {
	MultiplierButtons,
	OptionsContainer,
	QuestionBox,
	QuestionCounter,
} from "../components/styled/QuizQuestion.styled";
import { Logo, LogoText } from "../components/styled/Logo.styled";
import { Container, Timer } from "../components/styled/QuizQuestion.styled";

function QuizQuestion() {
	return (
		<Container>
			<Flex searchbar>
				<div style={{ textAlign: "center" }}>
					<p>Time Left</p>
					<Timer>09:41</Timer>
				</div>
				<div>
					<Flex logo>
						<Logo src="/images/logo-gradient.svg" alt="Quizup logo"></Logo>
						<LogoText color="#343E3D">QuizUp</LogoText>
					</Flex>
				</div>
				<div>
					<StyledButton wd="100px" color="#343E3D">
						Skip
					</StyledButton>
				</div>
			</Flex>
			<MultiplierButtons>
				<button className="btn__2x">2X</button>
				<button>5X</button>
			</MultiplierButtons>
			<QuestionBox>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
					lacus, varius gravida ante eget, lobortis sodales purus. In hac
					habitasse platea dictumst. Donec velit felis, sagittis quis libero at,
					venenatis venenatis sem. Nullam quis lacus sem. Mauris quis tortor
					accumsan, accumsan odio malesuada, cursus neque. Proin id libero nec
					eros rutrum eleifend. Praesent dui magna, consectetur eu orci ac,
					mollis imperdiet eros. Proin vel malesuada nibh. Morbi non quam
					fermentum, pharetra est at, egestas tellus. Nunc fermentum eget ligula
					non convallis. Mauris lacinia magna sit amet mi mollis, quis facilisis
					lacus sodales. Fusce sollicitudin scelerisque sem, nec placerat leo.
				</p>
			</QuestionBox>
			<OptionsContainer>
				<div>A. Option A</div>
				<div className="green">B. Option B</div>
				<div className="blue">C. Option C</div>
				<div className="yellow">D. Option D</div>
			</OptionsContainer>
			<QuestionCounter>5/20</QuestionCounter>
		</Container>
	);
}

export default QuizQuestion;
