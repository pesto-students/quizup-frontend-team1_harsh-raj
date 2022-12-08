import styled from "styled-components";

export const LogoContainer = styled.div`
	// display: flex;
	width: 80%;
	margin-left: 100px;
	margin-top: 10px;
	padding: 10px 0 0 30px;

	span {
		font-size: 45px;
		margin-bottom: 20px;
		color: white;
		// width="100px"
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		text-align: center;
		margin: 0px;
	}
`;

export const SocialContainer = styled.div`
	// display: flex;
	// margin-top: 30px;

	div {
		display: flex;
		// padding-left: 20px;
		// margin: 10px;
		li {
			list-style-type: none;
			padding: 10px;
			margin: 10px;
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 50%;
		text-align: center;
		margin-left: 60px;
		padding: 0px;
	}
`;
