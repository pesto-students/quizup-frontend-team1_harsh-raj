import styled from "styled-components";

export const StyledPriceCard = styled.div`
	width: 350px;
	height: 450px;
	border-radius: 10px;
	background-color: white;
	margin: 20px 40px 0px 20px;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	div {
		display: flex;
		margin-bottom: 40px;
	}

	h1 {
		text-align: left;
		margin-bottom: 15px;
	}

	h2 {
		text-align: left;
		margin-bottom: 40px;
	}

	div p {
		text-align: left;
		padding: 0px 0px 2px 10px;
		font-size: 16px;
		// padding: 10px;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		// flex-direction: column;
		justify-content: center;
		margin: 10px;
		width: 100%;
		// margin-bottom: 40px;
	}
`;

export const StyledPriceCard2 = styled.div`
	width: 350px;
	height: 450px;
	border-radius: 10px;
	background-color: #5b8e7d;
	margin: 20px 40px 0px 20px;
	color: white;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	div {
		display: flex;
		margin-bottom: 30px;
	}

	h1 {
		text-align: left;
		margin-bottom: 15px;
	}

	h2 {
		text-align: left;
		margin-bottom: 20px;
	}

	div p {
		text-align: left;
		padding: 0px 0px 2px 10px;
		font-size: 16px;
		// padding: 10px;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		// flex-direction: column;
		justify-content: center;
		margin: 10px;
		width: 100%;
		// margin-bottom: 40px;
	}
`;
