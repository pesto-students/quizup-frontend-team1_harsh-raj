import styled from "styled-components";

export const FlexContainer = styled.div`
	display: flex;
	// align-items: center;
	width: 100%;
	/* background-image: url("/images/bcg-blur.png");
	background-repeat: no-repeat;
	/* background-size: contain;  */
	// margin-right: 40px;
	// padding: 20px 40px 20px 0px;

	// margin-top: 20px;
	// margin-bottom: 20px;
	justify-content: space-between;

	div {
		padding-left: 70px;
		// margin: 0px 40px 0px 50px;
		margin-left: 50px;
		// margin-right: 50px;
		// text-align: center;

		h1 {
			width: 60%;
			// text-align: left;

			@media (max-width: ${({ theme }) => theme.mobile}) {
				// flex-direction: column;
				width: 100%;
				justify-content: center;
				// text-align: left;
				font-size: 40px;
				margin-bottom: 20px;
			}
		}

		p {
			font-size: 24px;
			width: 60%;
			margin-top: 14px;

			@media (max-width: ${({ theme }) => theme.mobile}) {
				flex-direction: column;
				width: 100%;
				margin-bottom: 40px;
			}
		}

		@media (max-width: ${({ theme }) => theme.mobile}) {
			flex-direction: column;
			width: 90%;
			margin: 0px 10px 20px 20px;
			padding: 0px;
			// justify-content: center;
		}
	}

	span {
		padding-top: 20px;
		margin-right: 80px;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			flex-direction: column;
			width: 100%;
			margin-bottom: 20px;
		}
	}

	h3 {
		color: #ffd05a;
		font-size: 16px;
		// padding: 10px;
		margin-top: 10px;

		//      @media (max-width: ${({ theme }) => theme.mobile}) {
		// flex-direction: column;
		// // width: 130%;
		// // margin-bottom: 40px;
		// }
	}

	h1 {
		font-size: 50px;
		width: 100%;
		padding-top: 10px 0 10px 0;
	}

	p {
		color: #5b8e7d;
		width: 60%;
		font-size: 26px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	h3 {
		color: #ffd05a;
		font-size: 16px;
		// padding: 10px;
		margin-top: 30px;
		margin-bottom: 15px;
		// width: 100%;

		// @media (max-width: 500px) {
		//     width: 300px;
		// align-items: center;
	}

	ul {
		// width: 60
		// margin-top: 5px;
		margin-right: 2px;
		text-align: left;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			// flex-direction: row;
			// width: 70%;
			text-align: center;
			margin-bottom: 20px;
		}
	}

	li {
		text-align: left;
		font-size: 14px;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			text-align: center;
			margin-bottom: 20px;
		}
	}

	& > div,
	& > ul {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		justify-content: center;
		// align-items: left;
		text-align: left;
		margin: 0;
		padding: 0;
	}
`;
