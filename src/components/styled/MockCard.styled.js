import styled from "styled-components";

export const StyledMockCard = styled.div`
	width: 175px;
	height: 175px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.mockCard};
	padding: 15px;
	margin-top: 40px;
	margin-right: 50px;
	box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const StyledIcon = styled.div`
	width: 40px;
	height: 40px;
	padding: 5px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.white};

	& > img {
		width: 25px;
		position: relative;
		top: 3px;
	}
`;

export const Button = styled.button`
	width: 140px;
	background-color: ${({ theme }) => theme.colors.white};
	border: none;
	border-radius: 10px;
	font-size: 1rem;
	padding: 10px;
	cursor: pointer;
`;
