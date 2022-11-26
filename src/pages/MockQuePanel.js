import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
import MockQueForm from "../components/MockQuePanel";
import { Container } from "../components/styled/MockQuePanel.styled";

function MockQuePanel() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<h1>Mock test name</h1>
					<MockQueForm />

					<Link to={"/create"}>
						<StyledButton color="rgba(232, 113, 33, 1)">Exit</StyledButton>
					</Link>
					<Link to={"/create"}>
						<StyledButton>Save</StyledButton>
					</Link>
				</Container>
			</Flex>
		</>
	);
}

export default MockQuePanel;
