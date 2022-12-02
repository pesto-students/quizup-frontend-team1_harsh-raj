import styled from "styled-components";

export const LogoContainer = styled.div`
    // display: flex;
    width: 90%;
    margin-left: 100px;
    padding: 10px 0 0 30px;

   span {
        font-size: 45px;
        width="100px" 
    }

         @media (max-width: ${({ theme }) => theme.mobile}) {
        // flex-direction: row;
        width: 70%;
        text-align: center;
		// margin-bottom: 40px; 
      }

`

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

        @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
		// margin-left: 90px; 
      }
    }

`