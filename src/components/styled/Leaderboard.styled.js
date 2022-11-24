import styled from "styled-components";

export const StyledTable = styled.table`
	margin-top: 50px;
	width: ${(props) => props.width || "70%"};

	th {
		padding: 20px 0;
		font-size: 24px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreen};
	}

	td {
		text-align: center;
		border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreen};
		padding: 10px 0;
	}

	a {
		text-decoration: none;
	}
`;
