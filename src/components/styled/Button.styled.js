import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	width: ${(props) => props.width || "150px"};
	height: 50px;
	padding: 10px;
	background-color: ${({ color }) => color || "#5b8e7d"};
	color: ${({ fontclr }) => fontclr || "white"};
	border: none;
	border-radius: 10px;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.2s ease;

	${(props) =>
		props.login &&
		css`
			display: block;
			margin: 20px auto;

			& > img {
				max-width: 1.75rem;
				margin-right: 20px;
				vertical-align: middle;
			}
		`}
	&:hover {
		opacity: 0.9;
	}
`;
