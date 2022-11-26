import styled from "styled-components";

export const AnalyticsCard = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.quizCard};
	padding: 15px;
	box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;

	& > h4 {
		color: ${({ theme }) => theme.colors.darkGreen};
	}

	& > p {
		color: ${({ theme }) => theme.colors.darkYellow};
		font-size: 1.7rem;
		font-weight: 700;
	}
`;

export const TrendingCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 225px;
	height: 225px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.quizCard};
	padding: 15px;
	box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

	ol {
		list-style-position: inside;
	}
`;

// BarGraph Section

// Graph Background Container
export const StyledBarGraph = styled.div`
	width: 75%;
	height: 300px;
	border-radius: 15px;
	background-color: rgba(255, 208, 90, 0.1);
	padding: 15px;
	box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
`;

// Graph itself Tag in ./styled/BarChart
export const ChartBox = styled.div`
	width: 100%;
	height: 250px;
`;
