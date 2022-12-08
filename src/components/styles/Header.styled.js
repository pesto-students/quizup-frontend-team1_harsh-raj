import styled from "styled-components";

export const Styledheader = styled.header`
    // background-color: #fff;
    margin-top: 30px;
    // width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    // padding: 40px 0;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        width: 100%;
        justify-content: left;
    }
`

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    margin-left: 70px;
    margin-right: 60px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        // flex-direction: cloumn-reverse;
        // justify-content: left;
		// margin: 10px;
		width: 80%;
		
      }
`
export const Logo = styled.a`
    // padding: 1rem 0;
    margin-top: 20px;
    color: #000;
    text-decoration: none;
    // font-weight: 800;
    // font-size: 1.7rem;

    span {
        // font-weight: 300;
        // width: 100%;
        font-size: 3rem;
        margin-left: 10px;
    }
         @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: wrap;
        width: 40%;
        // justify-content: center;
		margin-left: 30px; 
      }
`

export const LogoDiv = styled.a`
    // padding: 1rem 0;
    margin-top: 20px;
    color: #000;
    text-decoration: none;
    // font-weight: 800;
    // font-size: 1.7rem;

    span {
        // font-weight: 300;
        // width: 100%;
        font-size: 3rem;
        margin-left: 10px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        width: 100%;
        // justify-content: center;
		margin-right: 20px;
        padding: 0px 
      }
    }
         @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        width: 50%;
        // justify-content: center;
		margin: 0px; 
      }
`

export const LogoImg = styled.img`
    width: 54px;
    margin-top: 5px;

    @media (max-width: 768px) {
        // display: flex;
    flex-direction: column;
    }
    
`

export const Rightcontainer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: right;
        margin-left: 20px
        width: 60%;
    }
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`

export const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer; 
    text-align: center;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;

    &:hover {
        color: #7b7fda;
    }
`
export const Image = styled.img`
    width: 550px;
    padding: 20px;
    margin-right: 40px;
    // justify-content:

    @media (max-width: ${({ theme }) => theme.mobile}) {
        // margin: 40px;
        width: 350px;
        justify-content: center;
    }
`
