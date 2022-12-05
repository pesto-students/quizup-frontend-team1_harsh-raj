import styled from "styled-components"

export const StyledFooter = styled.div`
    background-color: #343E3D;
    color: #fff;
    // padding: 100px 0 60px;
    display: flex;
    width: 100%;
    // justify-content: space-evenly;

    ul{
        list-style-type: none
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
		// margin-bottom: 40px; 
      }
`