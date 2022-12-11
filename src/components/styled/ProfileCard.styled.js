import styled from "styled-components";

export const StyledProfileCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	margin-top: 50px;
	line-height: 1.5;
	height: fit-content;
	min-height: 400px;
	width: 500px;

	border-radius: 10px;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.mockCard};
`;

export const NameImage = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	img {
		width: 70px;
		margin: 5px;
		border-radius: 50%;
	}
`;
