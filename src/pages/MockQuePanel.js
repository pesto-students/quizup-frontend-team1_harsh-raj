import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { Flex } from "../components/styled/Flex.styled";
import { StyledButton } from "../components/styled/Button.styled";
import MockQueForm from "../components/MockQuePanel";
import { Container } from "../components/styled/MockQuePanel.styled";

function MockQuePanel() {
	return (
		<>
			<Flex>
				<AdminSidebar />
				<Container>
					<MockQueForm />

					<Flex searchbar>
						<Link to={"/create/mock/question"}>
							<StyledButton add color="#343E3D">
								Add another question
							</StyledButton>
						</Link>

						<div>
							<Link to={"/create"}>
								<StyledButton color="rgba(232, 113, 33, 1)">Exit</StyledButton>
							</Link>
							<Link to={"/create"}>
								<StyledButton>Save</StyledButton>
							</Link>
						</div>
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default MockQuePanel;
