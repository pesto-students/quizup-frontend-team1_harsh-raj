import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import examData from "../examData";
import TestCard from "../components/TestCard";
import { useParams } from "react-router-dom";

function MockTests() {
	const { id } = useParams();
	const filtered = examData.filter((exam) => exam.id === id);
	const exam = filtered[0];

	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<Flex searchbar>
						<h1>Explore test from {exam.name}</h1>
						<Searchbar />
					</Flex>
					<Flex wrap>
						{exam.tests ? (
							exam.tests.map((item, index) => (
								<TestCard key={index} test={item} />
							))
						) : (
							<p className="error">
								This exam does not have any tests currently.
							</p>
						)}
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default MockTests;
