import { StyledSidebar } from "./styled/Sidebar.styled";

function Sidebar() {
	return (
		<>
			<StyledSidebar>
				<h2>Logo</h2>
				<button>Home</button>
				<button>Mock Test</button>
				<button>Quiz</button>
				<button>Profile</button>
				<button>Leaderboard</button>
			</StyledSidebar>
		</>
	);
}

export default Sidebar;
