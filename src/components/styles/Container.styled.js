import styled from "styled-components";

export const Container = styled.div`
    // width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;

    // background: #fff;
    // height: 100vh;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;

		// margin-bottom: 40px; 
      }
`