import styled from "styled-components";

export const StyledLoginCard = styled.div`
	height: fit-content;
	max-width: 400px;
	border-radius: 20px;
	background-color: #ffd05a33;
	padding: 30px;
	text-align: center;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-right: 20px;

	& h1 {
		margin-bottom: 20px;
	}

	& h2 {
		margin-bottom: 10px;
	}

	& p {
		font-size: 1rem;
		margin-bottom: 20px;
	}

	& #signInDiv {
		display: inline-block;
		background-color: white;
		padding: 10px;
		border-radius: 10px;
	}
`;
