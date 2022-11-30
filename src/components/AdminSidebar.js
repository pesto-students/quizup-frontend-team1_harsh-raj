import { StyledSidebar, StyledButton } from "./styled/Sidebar.styled";
import { Flex } from "./styled/Flex.styled";
import { Logo, LogoText } from "./styled/Logo.styled";
import { NavLink, Link } from "react-router-dom";

function AdminSidebar() {
	return (
		<>
			<StyledSidebar>
				<Flex sidebar>
					<div>
						<Flex logo>
							<Logo src="/images/logo-white.svg" alt="Quizup logo" />
							<LogoText>QuizUp</LogoText>
						</Flex>
						<NavLink to={"/admin"}>
							<StyledButton>
								<img src="/images/home_icon.svg" alt="Home icon" />
								Home
							</StyledButton>
						</NavLink>
						<NavLink to={"/create"}>
							<StyledButton className="active">
								<img
									src="/images/admin-dashboard/Plus.svg"
									alt="Mock test icon"
								/>
								Create
							</StyledButton>
						</NavLink>
						<NavLink to={"/Delete"}>
							<StyledButton>
								<img
									src="/images/admin-dashboard/Substract.svg"
									alt="Quiz icon"
								/>
								Delete
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

export default AdminSidebar;
