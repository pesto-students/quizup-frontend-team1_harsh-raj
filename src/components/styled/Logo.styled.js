import styled from "styled-components";

export const Logo = styled.img`
	width: 50px !important;
	margin-bottom: 50px;
`;

export const LogoImg = styled.img`
	width: 55px !important;
	margin-bottom: 50px;

		@media (max-width: ${({ theme }) => theme.mobile}) {
        // flex-direction: column;
        // justify-content: center;
		// margin: 10px;
		width: 100%;
`;

export const LogoText = styled.p`
	color: ${({ color }) => color || "#fff"};
	font-size: 2rem;
	margin-bottom: 50px;
	font-weight: 300;
`;

export const Logotext = styled.p`
	// color: black;
	font-size: 2.7rem;
	margin-top: 7px;
	margin-bottom: 50px;
	font-weight: 300;
`;
