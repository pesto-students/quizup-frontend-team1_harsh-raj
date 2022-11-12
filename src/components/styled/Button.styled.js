import styled from "styled-components";

export const StyledButton = styled.button`
	width: 150px;
	height: 50px;
	padding: 10px;
	background-color: ${({ color }) => color || "#5b8e7d"};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	border-radius: 10px;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.2s ease;

	&:hover {
		opacity: 0.9;
	}
`;
