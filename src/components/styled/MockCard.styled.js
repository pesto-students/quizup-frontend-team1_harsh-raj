import styled from "styled-components";

export const StyledMockCard = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.mockCard};
	padding: 15px;
`;
