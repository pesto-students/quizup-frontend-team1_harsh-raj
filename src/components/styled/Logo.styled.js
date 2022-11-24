import styled from "styled-components";

export const Logo = styled.img`
	width: 50px !important;
	margin-bottom: 50px;
`;

export const LogoText = styled.p`
	color: ${({ color }) => color || "#fff"};
	font-size: 2rem;
	margin-bottom: 50px;
	font-weight: 300;
`;
