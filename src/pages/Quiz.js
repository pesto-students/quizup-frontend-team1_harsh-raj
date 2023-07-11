import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import QuizCard from "../components/QuizCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizzes, reset } from "../features/quizzes/quizSlice";
import MoonLoader from "react-spinners/MoonLoader";

function Quiz() {
	const dispatch = useDispatch();
	const { quizzes, isError, message, isLoading } = useSelector(
		(state) => state.quizzes
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getAllQuizzes());

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
						<h1>Explore all Quizzes</h1>
						<Searchbar />
					</Flex>
					<Flex wrap="true">
						{isLoading ? (
							<MoonLoader loading={isLoading} size={30} color="#343E3D" />
						) : quizzes.length > 0 ? (
							quizzes.map((quiz) => <QuizCard key={quiz._id} item={quiz} />)
						) : (
							<h4>Cant't find any quizzes. Sorry for inconvenience...</h4>
						)}
					</Flex>
				</Container>
			</Flex>
		</>
	);
}

export default Quiz;
