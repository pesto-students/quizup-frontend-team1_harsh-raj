import styled, { css } from "styled-components";

export const StyledSidebar = styled.nav`
	height: 100vh;
	max-width: 250px;
	background-color: ${({ theme }) => theme.colors.darkGreen};
	color: white;
	padding: 30px;
`;

export const StyledButton = styled.button`
	width: 175px;
	height: 50px;
	font-size: 1.25rem;
	border-radius: 10px;
	border: none;
	color: ${(props) => props.color || "#fff"};
	background-color: ${(props) => props.bg || "#343e3d"};
	cursor: pointer;
	display: flex;
	padding: 15px;
	gap: 15px;
	justify-content: flex-start;
	align-items: initial;
	margin-bottom: 20px;

	${(props) =>
		props.selected &&
		css`
			background-color: #fff;
			color: #343e3d;
		`}
`;

export const StyledIcon = styled.img`
	max-width: 25px;
	${(props) =>
		props.selected &&
		css`
			filter: brightness(0) saturate(100%) invert(23%) sepia(25%) saturate(212%)
				hue-rotate(125deg) brightness(90%) contrast(93%);
		`};
`;
