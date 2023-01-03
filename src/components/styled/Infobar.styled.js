import styled from "styled-components";

export const StyledInfobar = styled.div`
	width: 300px;
	border-left: 2px solid ${({ theme }) => theme.colors.darkGreen};
	height: 100%;

	& .timer {
		margin: 20px auto;
		text-align: center;

		& > div {
			margin-top: 10px;
			font-size: 1.4rem;
			font-weight: 700;
		}
	}
`;

export const SectionTitle = styled.div`
	width: 100%;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.darkGreen};
	color: white;
	text-align: center;
	padding: 10px 0;
	font-size: 1.2rem;
`;

export const SectionBody = styled.div`
	padding: 15px;
`;

export const QuestionBox = styled.div`
	width: 30px;
	height: 30px;
	background-color: #d1d1d1;
	border-radius: 10px;
	margin-right: 8px;
	margin-bottom: 10px;
	text-align: center;
	padding: 5px 0;
	cursor: pointer;
`;
