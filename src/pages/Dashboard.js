import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import MockSection from "../components/MockSection";
import QuizSection from "../components/QuizSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, getUser } from "../features/user/userSlice";

function Dashboard() {
	const dispatch = useDispatch();
	const { user, isError, message } = useSelector((state) => state.user);

	if (user === null) {
		dispatch(getUser());
	}

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		return () => {
			dispatch(reset());
		};
	}, [isError, message, dispatch]);

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
