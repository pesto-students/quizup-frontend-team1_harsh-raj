import { StyledSidebar, StyledButton } from "./styled/Sidebar.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Sidebar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutHandler = () => {
		/* global google */
		google.accounts.id.disableAutoSelect();
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<>
			<StyledSidebar>
				<Flex sidebar>
					<div>
						<Flex logo>
							<Logo src="/images/logo-white.svg" alt="Quizup logo" />
							<LogoText>QuizUp</LogoText>
						</Flex>
						<NavLink to={"/dashboard"}>
							<StyledButton>
								<img src="/images/home_icon.svg" alt="Home icon" selected />
								Home
							</StyledButton>
						</NavLink>
						<NavLink to={"/exams"}>
							<StyledButton>
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
						<StyledButton
							className="g_id_signout"
							bg="#FFD05A"
							color="#343e3d"
							onClick={logoutHandler}
						>
							<img src="/images/logout_icon.svg" alt="Logout icon" />
							Logout
						</StyledButton>
					</div>
				</Flex>
			</StyledSidebar>
		</>
	);
}

export default Sidebar;
