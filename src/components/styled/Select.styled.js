import styled from "styled-components";

export const Container = styled.div`
	flex-grow: 1;
	padding: 30px 50px;
	& ol {
		margin-bottom: 50px;
	}

	& ol > li {
		font-size: 25px;
		margin: 10px;
	}

	& > .wrapper {
		margin-top: 50px;
	}
`;

// DropDown Box Styled
export const StyledSelect = styled.select`
	width: 250px;
	height: 30px;
	border-radius: 5px;
	padding: 5px 10px;
`;

// Enter TIME Box Styeled
export const StyledInput = styled.input`
	width: 250px;
	height: 30px;
	padding: 5px 10px;
	border-radius: 5px;
	border: 0.5px solid black;
`;
