import {
	StyledSidebar,
	StyledButton,
	StyledIcon,
} from "./styled/Sidebar.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";

function Sidebar() {
	return (
		<>
			<StyledSidebar>
				<Flex sidebar>
					<div>
						<Flex logo>
							<Logo src="/images/logo-white.svg" alt="Quizup logo" />
							<LogoText>QuizUp</LogoText>
						</Flex>
						<StyledButton selected>
							<StyledIcon
								src="./images/home_icon.svg"
								alt="Home icon"
								selected
							/>
							Home
						</StyledButton>
						<StyledButton>
							<StyledIcon
								src="./images/mocktest_icon.svg"
								alt="Mock test icon"
							/>
							Mock Test
						</StyledButton>
						<StyledButton>
							<StyledIcon src="./images/quiz_icon.svg" alt="Quiz icon" />
							Quiz
						</StyledButton>
						<StyledButton>
							<StyledIcon src="./images/profile_icon.svg" alt="Profile icon" />
							Profile
						</StyledButton>
						<StyledButton>
							<StyledIcon
								src="./images/leaderboard_icon.svg"
								alt="Leaderboard icon"
							/>
							Leaderboard
						</StyledButton>
					</div>
					<div>
						<StyledButton bg="#FFD05A" color="#343e3d">
							<StyledIcon src="./images/logout_icon.svg" alt="Logout icon" />
							Logout
						</StyledButton>
					</div>
				</Flex>
			</StyledSidebar>
		</>
	);
}

export default Sidebar;
