import styled from "styled-components";

export const Logo = styled.img`
	max-width: 50px;
	margin-bottom: 50px;
`;

export const LogoText = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: 2rem;
	margin-bottom: 50px;
	font-weight: 300;
`;
