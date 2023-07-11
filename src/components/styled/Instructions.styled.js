import styled from "styled-components";

export const Titlebar = styled.nav`
	width: 100vw;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.darkGreen};
	color: ${({ theme }) => theme.colors.white};
	padding: 10px 40px;

	& img {
		width: 30px;
	}

	& p {
		margin-left: 20px;
		align-self: center;
		font-size: 1.25rem;
	}
`;

export const Container = styled.div`
	width: 80vw;
	margin: 30px auto;

	& h1 {
		font-size: 3rem;
	}

	& ol {
		margin-top: 30px;
		margin-bottom: 50px;
		list-style: inside;
		list-style-type: decimal;
	}

	& ol > li {
		font-size: 1.25rem;
		margin-bottom: 10px;
	}

	& button {
		margin-left: 70px;
		margin-top: 70px;
	}
`;
