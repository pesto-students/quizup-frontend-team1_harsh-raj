import styled from "styled-components";

export const Styledheader = styled.header`
    // background-color: #fff;
    // padding: 50px;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
`
export const Logo = styled.a`
    padding: 1rem 0;
    color: #000;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
        font-weight: 300;
        width: 100%;
        font-size: 3rem;
        margin-left: 5px;
    }
`

export const LogoImg = styled.img`
    width: 65px;

    
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
    width: 600px;
    padding: 20px;
    // margin-left: 40px;
    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
    }
`
