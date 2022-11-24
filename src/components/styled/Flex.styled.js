import styled, { css } from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(layout) => layout || "row"};

	${(props) =>
		props.sidebar &&
		css`
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		`}

	${(props) =>
		props.logo &&
		css`
			gap: 10px;
			align-items: center;
		`}

		${(props) =>
		props.searchbar &&
		css`
			justify-content: space-between;
			align-items: center;
		`}

		${(props) =>
		props.seeMoreBtn &&
		css`
			align-items: center;
			justify-content: space-between;
		`}

		${(props) =>
		props.wrap &&
		css`
			flex-wrap: wrap;
		`}

		${(props) =>
		props.radioBtn &&
		css`
			gap: 20px;
			justify-content: center;

			& input {
				margin-right: 5px;
			}
		`}
	

		& .error {
		margin-top: 100px;
	}
`;
