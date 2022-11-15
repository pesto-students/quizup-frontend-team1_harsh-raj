import React from 'react'
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import LandingPage from './pages/LandingPage'

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
			<GlobalStyles />
			<LandingPage />
		</ThemeProvider>
  )
}

export default App
