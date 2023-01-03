import styled from "styled-components";

export const Container = styled.div`
	flex-grow: 1;
	padding: 30px 50px;
	height: 100%;

	button {
		text-align: center;
		font-size: 20px;
		margin: 20px;
		height: 40px;
		width: 100px;
	}
`;

export const StyledMockForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 70vh;
	text-align: center;

	& textarea {
		border-radius: 10px;
		width: 700px;
		height: 200px;
		padding: 10px 20px;
		font-size: 1.5rem;
		font-family: "Lato", sans-serif;
		margin-bottom: 30px;
		margin-left: 10px;
	}

	& input[type="text"] {
		border-radius: 10px;
		width: 250px;
		height: 70px;
		padding: 5px 10px;
		font-family: "Lato", sans-serif;
		font-size: 1.1rem;
		margin-right: 30px;
		margin-bottom: 20px;
		border: 0.5px solid black;
	}

	& label.radiobtn {
		margin-left: 10px;
		margin-right: 70px;
	}
	& input[type="radio"] {
		margin-right: 10px;
	}
`;
