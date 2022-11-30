import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

import Create from "./pages/CreatePage";
import Delete from "./pages/DeletePage";
import AdminDashboard from "./pages/AdminDashboard";
import CreateMockTest from "./pages/CreateMockTest";
import CreateQuizTest from "./pages/CreateQuizTest";
import DeleteMock from "./pages/DeleteMock";
import DeleteQuiz from "./pages/DeleteQuiz";
import MockQuePanel from "./pages/MockQuePanel";
import QuizQueMCQ from "./pages/QuizQueMCQ";
import QuizQueTF from "./pages/QuizQueT&F";
import Exams from "./pages/Exams";
import Quiz from "./pages/Quiz";
import MockTests from "./pages/MockTests";
import MockInstructions from "./pages/MockInstructions";
import QuizDetails from "./pages/QuizDetails";
import LoginPage from "./pages/LoginPage";
import Leaderboard from "./pages/Leaderboard";
import MockResult from "./components/MockResult"
import LeaderboardQuiz from "./components/LeaderboardQuiz";

const theme = {
	colors: {
		darkGreen: "#343E3D",
		lightGreen: "#5B8E7D",
		orange: "#E87121",
		darkYellow: "#FF9400",
		lightYellow: "#FFD05A",
		white: "#FFFFFF",
		mockCard: "#FFD05A4D",
		quizCard: "#5B8E7D33",
	},
	mobile: "768px",
};

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes>
					<Route path="/admin" element={<AdminDashboard />} />
					<Route path="/create" element={<Create />} />
					<Route path="/create/mock" element={<CreateMockTest />} />
					<Route path="/create/mock/question" element={<MockQuePanel />} />
					<Route path="/create/quiz" element={<CreateQuizTest />} />
					<Route path="/create/quiz/mcq" element={<QuizQueMCQ />} />
					<Route path="/create/quiz/tf" element={<QuizQueTF />} />
					<Route path="/delete" element={<Delete />} />
					<Route path="/delete/mock" element={<DeleteMock />} />
					<Route path="/delete/quiz" element={<DeleteQuiz />} />
					<Route path="/" element={<Dashboard />} />
					<Route path="/exams" element={<Exams />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/tests/:id" element={<MockTests />} />
					<Route path="/instructions/:id" element={<MockInstructions />} />
					<Route path="/quizdetails/:id" element={<QuizDetails />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
					<Route path="/result" element={<MockResult />} />
					<Route path="/result/html" element={<LeaderboardQuiz />} />
          <Route path="/login" element={<LoginPage />} />
				</Routes>
				</ThemeProvider>
			</Router>
		</>

	);
}

export default App;

// import Dashboard from "./pages/Dashboard";
// import Exams from "./pages/Exams";
// import Quiz from "./pages/Quiz";
// import MockTests from "./pages/MockTests";
// import MockInstructions from "./pages/MockInstructions";
// import QuizDetails from "./pages/QuizDetails";

// {/* <Route path="/" element={<Dashboard />} /> */}
// <Route path="/exams" element={<Exams />} />
// <Route path="/quiz" element={<Quiz />} />
// <Route path="/tests/:id" element={<MockTests />} />
// <Route path="/instructions/:id" element={<MockInstructions />} />
// <Route path="/quizdetails/:id" element={<QuizDetails />} />
