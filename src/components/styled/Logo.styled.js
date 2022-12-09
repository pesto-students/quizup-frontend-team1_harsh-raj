import styled from "styled-components";

export const Logo = styled.img`
	width: 50px !important;
	margin-bottom: 50px;
`;

export const LogoImg = styled.img`
	width: 55px !important;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}
`;

export const LogoText = styled.p`
	color: ${({ color }) => color || "#fff"};
	font-size: 2rem;
	margin-bottom: 50px;
	font-weight: 400;
`;

export const Logotext = styled.p`
	color: ${({ theme }) => theme.colors.darkGreen};
	font-size: 2.5rem;
	font-weight: 400;
`;
