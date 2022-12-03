import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import MockCard from "../components/MockCard";
import { useDispatch, useSelector } from "react-redux";
import { reset, getAllExams } from "../features/exams/examSlice";
import { useEffect } from "react";

function Exams() {
	const dispatch = useDispatch();
	const { exams, isError, message } = useSelector((state) => state.exams);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getAllExams());

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message]);
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
						{exams.map((exam) => (
							<MockCard key={exam._id} item={exam} />
						))}
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default Exams;
