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
			justify-content: space-between;
			align-items: center;
		`}

		${(props) =>
		props.wrap &&
		css`
			flex-wrap: wrap;
		`}

		${(props) =>
			props.loginpage &&
			css`
		
      flex-direction: column;
      align-items: center;
			`}
	

		& .error {
		margin-top: 100px;
	}
`;


// display:flex;
// justify-content:center;
// font-size:30px;
