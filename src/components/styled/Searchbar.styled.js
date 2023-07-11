import styled from "styled-components";

export const StyledSearchbar = styled.input`
	width: 400px;
	height: 45px;
	border-radius: 10px;
	padding: 10px;
	font-size: 1rem;
	border: 2px solid ${({ theme }) => theme.colors.darkGreen};
`;
