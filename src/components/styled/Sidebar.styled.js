import styled from "styled-components";

export const StyledSidebar = styled.nav`
	position: sticky;
	top: 0;
	bottom: 0;
	height: 100vh;
	max-width: 250px;
	background-color: ${({ theme }) => theme.colors.darkGreen};
	color: white;
	padding: 30px;

	& img {
		width: 25px;
	}

	& a {
		text-decoration: none;
	}

	& a.active {
		& > button {
			background-color: #fff;
			color: #343e3d;
			text-decoration: none;

			& img {
				filter: brightness(0) saturate(100%) invert(23%) sepia(25%)
					saturate(212%) hue-rotate(125deg) brightness(90%) contrast(93%);
			}
		}
	}
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
`;
