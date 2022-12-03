import styled from "styled-components";

export const StyledQuizCard = styled.div`
	width: 175px;
	height: 175px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.quizCard};
	padding: 12px;
	margin-top: 40px;
	margin-right: 50px;
	box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;

	& .price {
		width: 40px;
		height: 40px;
		padding: 5px;
		border-radius: 50%;
		background-color: #ffeab5;
		position: absolute;
		top: -10px;
		right: -15px;
		text-align: center;
		vertical-align: center;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
		& p {
			position: relative;
			text-align: center;
			top: 7px;
			font-size: 14px;
		}
	}

	& .time {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.orange};
	}
`;
