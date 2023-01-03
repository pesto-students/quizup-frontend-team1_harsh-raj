import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 20px 40px;
`;

export const Timer = styled.div`
	width: 150px;
	border-radius: 5px;
	border: 1px solid black;
	text-align: center;
	padding: 10px 5px;
	font-size: 2rem;
`;

export const QuestionBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: fit-content;
	max-width: 800px;
	min-width: 500px;
	height: fit-content;
	min-height: 200px;
	margin: 0 auto;
	border: 1px solid black;
	border-radius: 5px;
	font-size: 1.3rem;
	padding: 20px 30px;
	box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const MultiplierButtons = styled.div`
	position: absolute;
	width: 100px;
	height: 200px;
	padding: 40px 10px;
	text-align: center;
	box-sizing: border-box;

	& button {
		font-size: 1.5rem;
		border-radius: 50%;
		color: white;
		padding: 15px;
		margin-bottom: 20px;
		border: none;
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.lightGreen};
		transition: 0.2ms ease-in-out;
		box-sizing: border-box;

		&:hover {
			opacity: 0.9;
		}

		&.clicked {
			box-shadow: 0px 0px 0px 1px black inset;
			transform: scale(1.1);
		}
	}

	& > .btn__2x {
		background-color: ${({ theme }) => theme.colors.orange};
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 90%;
	margin: 50px auto 20px auto;

	& div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 49%;
		margin-right: 5px;
		margin-bottom: 5px;
		border-radius: 5px;
		font-size: 1.2rem;
		color: white;
		height: 120px;
		padding: 20px;
		cursor: pointer;
		background-color: #db2d37;
		transition: 0.2ms ease;
		flex-grow: 1;

		&:hover {
			opacity: 0.95;
		}
	}

	& > .green {
		background-color: #398b38;
	}

	& > .blue {
		background-color: #4046db;
	}

	& > .yellow {
		background-color: #ff9400;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		& div {
			width: 100%;
		}
	}
`;

export const QuestionCounter = styled.div`
	width: 100%;
	font-size: 2rem;
	font-weight: 700;
`;
