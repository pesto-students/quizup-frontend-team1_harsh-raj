import styled from "styled-components";

export const StyledMockResult = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 40px;
	gap: 50px;

	div {
		width: 50%;
		margin-top: 40px;
		p {
			font-size: 24px;
			padding-bottom: 10px;
		}
		div {
			margin-top: 50px;
		}
	}
`;

export const Photo = styled.img`
	max-width: 450px;
`;
