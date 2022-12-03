import styled, { css } from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: ${({ layout }) => layout || "row"};

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
		props.question &&
		css`
			height: 93%;
			justify-content: space-between;

			& .wrapper {
				/* flex-grow: 1; */
				width: 80vw;
				padding: 40px 50px;
				/* background-color: lightblue; */
			}

			& .question {
				margin-top: 10px;
			}

			& .answers {
				margin-top: 30px;

				& input {
					margin-right: 10px;
					margin-bottom: 20px;
				}
			}
		`}

		${(props) =>
		props.buttons &&
		css`
			align-items: center;
			justify-content: space-between;
		`}

	${(props) =>
		props.btnAlign &&
		css`
			width: 90%;
			justify-content: space-between;
			margin-bottom: 50px;

			& button {
				margin-right: 20px;
			}
		`}

	& .error {
		margin-top: 100px;
	}
`;
