import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	width: ${({ wd }) => wd || "200px"};
	height: 50px;
	padding: 10px 20px;
	background-color: ${({ color }) => color || "#5b8e7d"};
	color: ${({ fontclr }) => fontclr || "white"};
	border: none;
	border-radius: 10px;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.2s ease;
	text-decoration: none;

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

	${({ add }) =>
		add &&
		css`
			width: fit-content !important;
		`}

	&:hover {
		opacity: 0.9;
	}
`;
