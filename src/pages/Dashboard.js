import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import MockCard from "../components/MockCard";

function Dashboard() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Welcome Harsh 👋</h1>
						<Searchbar />
					</Flex>
					<h4>Here are some Exams for you to explore...</h4>
					<MockCard />
				</Container>
			</Flex>
		</>
	);
}

export default Dashboard;
