import AdminCards from "../components/AdminCards";
import AdminSidebar from "../components/AdminSidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";

function AdminDashboard() {
	return (
		<>
			<Flex>
				<AdminSidebar />
				<Container>
					<h1>Welcome Chetan</h1>
					<AdminCards />
				</Container>
			</Flex>
		</>
	);
}

export default AdminDashboard;
