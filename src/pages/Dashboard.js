import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import MockSection from "../components/MockSection";
import QuizSection from "../components/QuizSection";
import { useSelector } from "react-redux";

function Dashboard() {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Welcome {user ? user.firstName : ""} 👋</h1>
						<Searchbar />
					</Flex>
					<MockSection />
					<QuizSection />
				</Container>
			</Flex>
		</>
	);
}

export default Dashboard;
