import { LoginCard } from "../components/LoginCard";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Link } from "react-router-dom";
import { Logo, LogoText } from "../components/styled/Logo.styled";
import { LoginWrapper } from "../components/styled/LoginWrapper.styled";
import { useSelector } from "react-redux";

export default function LoginPage() {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			<LoginWrapper>
				<Flex logo>
					<Logo src="/images/logo-gradient.svg" alt="Quizup logo" />
					<LogoText color="#343E3D">QuizUp</LogoText>
				</Flex>
				<LoginCard />
				<Link to={"/"} className={isLoading ? "hidden" : ""}>
					<StyledButton>Back to Home</StyledButton>
				</Link>
			</LoginWrapper>
		</>
	);
}
