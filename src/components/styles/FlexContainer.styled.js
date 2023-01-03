import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	${(props) =>
		props.bcg &&
		css`
			background-image: url("/images/bcg-blur.png");
			background-repeat: no-repeat;
			background-size: contain;
		`}

	div {
		padding-left: 70px;
		margin-left: 50px;

		h1 {
			width: 60%;

			@media (max-width: ${({ theme }) => theme.mobile}) {
				width: 100%;
				justify-content: center;
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
		}
	}

	span {
		padding-top: 50px;
		margin-right: 80px;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			flex-direction: column;
			width: 100%;
		}
	}

	h3 {
		color: #ffd05a;
		font-size: 16px;
		margin-top: 10px;
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
	}

	ul {
		margin-right: 2px;
		text-align: left;

		@media (max-width: ${({ theme }) => theme.mobile}) {
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
