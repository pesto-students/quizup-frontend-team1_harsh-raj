import { StyledSidebar, StyledButton } from "./styled/Sidebar.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";
import { NavLink, Link } from "react-router-dom";

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
						<NavLink to={"/"}>
							<StyledButton selected>
								<img src="/images/home_icon.svg" alt="Home icon" selected />
								Home
							</StyledButton>
						</NavLink>
						<NavLink to={"/exams"}>
							<StyledButton className="active">
								<img src="/images/mocktest_icon.svg" alt="Mock test icon" />
								Mock Test
							</StyledButton>
						</NavLink>
						<NavLink to={"/quiz"}>
							<StyledButton>
								<img src="/images/quiz_icon.svg" alt="Quiz icon" />
								Quiz
							</StyledButton>
						</NavLink>
						<NavLink to={"/profile"}>
							<StyledButton>
								<img src="/images/profile_icon.svg" alt="Profile icon" />
								Profile
							</StyledButton>
						</NavLink>
						<NavLink to={"/leaderboard"}>
							<StyledButton>
								<img
									src="/images/leaderboard_icon.svg"
									alt="Leaderboard icon"
								/>
								Leaderboard
							</StyledButton>
						</NavLink>
					</div>
					<div>
						<Link to={"/logout"}>
							<StyledButton bg="#FFD05A" color="#343e3d">
								<img src="/images/logout_icon.svg" alt="Logout icon" />
								Logout
							</StyledButton>
						</Link>
					</div>
				</Flex>
			</StyledSidebar>
		</>
	);
}

export default Sidebar;
