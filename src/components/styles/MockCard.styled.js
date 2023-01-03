import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
		justify-content: center;
	}
`;

export const StyledMockCard = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	background-color: #fff;
	margin: 20px 40px 20px 40px;

	h2 {
		padding: 10px;
	}

	p {
		padding: 20px;
		text-align: left;
		margin-top: 10px;
		margin-left: 10px;
	}
`;
