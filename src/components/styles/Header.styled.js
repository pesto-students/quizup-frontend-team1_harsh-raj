import styled from "styled-components";

export const Styledheader = styled.header`
	margin-top: 30px;
	background-color: ${({ theme }) => theme.colors.header};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		justify-content: left;
	}
`;

export const Nav = styled.div`
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	background: white;
	margin-left: 80px;
	margin-right: 60px;
	margin-bottom: 20px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		/* width: 80%; */
		margin-inline: 0;
	}
`;
export const Logo = styled.a`
	color: #000;
	text-decoration: none;

	span {
		font-size: 3rem;
		margin-left: 10px;
	}
`;

export const LogoDiv = styled.a`
	display: flex;
	align-items: center;
	margin-top: 20px;
	color: #000;
	text-decoration: none;
	gap: 10px;

	span {
		font-size: 2rem;
		display: inline-block;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			flex-direction: column;
			width: 100%;
			padding: 0px;
		}
	}
	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		width: 100%;
		margin: 0px;
		margin-top: 30px;
	}
`;

export const LogoImg = styled.img`
	width: 54px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Rightcontainer = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		height: 3px;
		width: 25px;
		background: ${({ theme }) => theme.colors.darkGreen};
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const Menu = styled.div`
	display: hidden;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
		transition: max-height 0.3s ease-in;
		margin: 10px auto;
	}
`;

export const MenuLink = styled.a`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #000;
	transition: all 0.2s ease-in;
	font-size: 1.2rem;

	&:hover {
		color: ${({ theme }) => theme.colors.orange};
	}
`;
export const Image = styled.img`
	width: 550px;
	/* padding: 20px; */
	margin: 40px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 80vw;
		margin: 20px;
	}
`;
