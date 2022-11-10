import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";

function Dashboard() {
	return (
		<>
			<Flex>
				<Sidebar />
				<div>
					<h1>Dashboard</h1>
				</div>
			</Flex>
		</>
	);
}

export default Dashboard;
