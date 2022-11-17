import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import Exams from "./pages/Exams";
import Quiz from "./pages/Quiz";
import MockTests from "./pages/MockTests";
import MockInstructions from "./pages/MockInstructions";
import QuizDetails from "./pages/QuizDetails";
import MockQuestion from "./pages/MockQuestion";

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
					<Route path="/" element={<Dashboard />} />
					<Route path="/exams" element={<Exams />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/tests/:id" element={<MockTests />} />
					<Route path="/instructions/:id" element={<MockInstructions />} />
					<Route path="/quizdetails/:id" element={<QuizDetails />} />
					<Route path="/mocktest/:id" element={<MockQuestion />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
