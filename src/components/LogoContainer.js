import styled from "styled-components";

export const LogoContainer = styled.div`
	width: 80%;
	margin-left: 100px;
	margin-top: 10px;
	padding: 10px 0 10px;

	span {
		color: white;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		justify-content: center;
		width: 100%;
		text-align: center;
		margin: 0px;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;

	div {
		display: flex;

		li {
			list-style-type: none;
			padding: 10px;
			margin: 10px;
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		margin-top: 10px;
		padding: 0px;
	}
`;
