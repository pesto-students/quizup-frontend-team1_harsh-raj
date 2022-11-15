import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import examData from "../examData";
import MockCard from "../components/MockCard";

function Exams() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Explore all Exams</h1>
						<Searchbar />
					</Flex>
					<Flex wrap>
						{examData.map((item, index) => (
							<MockCard key={index} item={item} />
						))}
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default Exams;
