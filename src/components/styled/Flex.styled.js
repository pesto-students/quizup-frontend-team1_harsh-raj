import styled, { css } from "styled-components";

export const Flex = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: ${(layout) => layout || "row"};

	${(props) =>
		props.sidebar &&
		css`
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
		`}

	${(props) =>
		props.logo &&
		css`
			align-items: center;
		`}
`;
