import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

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
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Dashboard />
		</ThemeProvider>
	);
}

export default App;
