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
			/* margin-bottom: 50px; */

			@media (max-width: ${({ theme }) => theme.mobile}) {
				flex-direction: wrap;
				justify-content: center;
				width: 100%;
			}
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

	${(props) =>
		props.barChart &&
		css`
			justify-content: space-between;
			align-content: flex-start;
			margin-top: 20px;
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

				& label {
					cursor: pointer;
				}
				& input {
					margin-right: 10px;
					margin-bottom: 20px;
					cursor: pointer;
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

	${(props) =>
		props.barChart &&
		css`
			justify-content: space-between;
			align-content: flex-start;
			margin-top: 20px;
		`}
  
    ${(props) =>
		props.analytics &&
		css`
			justify-content: space-between;
			align-content: flex-start;
			margin: 40px 0;
		`}

		${(props) =>
		props.mockquestion &&
		css`
			justify-content: center;
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
		margin-top: 50px;
	}
`;
