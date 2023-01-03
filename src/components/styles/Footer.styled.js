import styled from "styled-components";

export const StyledFooter = styled.div`
	background-color: #343e3d;
	color: #fff;
	display: flex;
	width: 100%;

	ul {
		list-style-type: none;
	}

	ul li {
		margin-bottom: 20px;
	}

	p {
		text-align: right;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		text-align: center;
	}
`;
