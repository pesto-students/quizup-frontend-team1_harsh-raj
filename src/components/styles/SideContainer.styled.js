import styled from "styled-components";

export const SideContainer = styled.div`
    display: flex;
    align-items: center;
    width: 82%;

    div {
        display: flex;
        width: 80%;
        // padding: 10px;
        margin-left: 30px;
        // text-align: right;


    }
        

        ul {
            margin-left: 30px;
            text-align: left;
            padding-left: 10px;
        }


        // p {
        //     color: #5B8E7D;
        //     width: 80%;
        //     // font-size: 26px;
        //     padding-top: 10px 40px 10px 10px;
        // }

  

    h3 {
        color: #FFD05A;
        font-size: 16px;
        // padding-top: 10px;
        text-align: left;
        margin-left: 30px;
        margin-bottom: 12px;
        // margin-left: 10px;

         @media (max-width: ${({ theme }) => theme.mobile}) {
        // text-align: center;
		margin-left: 70px; 
      }

        
    }

    ul {
        text-align: right;
        margin-left: 40px;
        // width: 50%;

        p {
            color: white;
            text-align: left;
            padding: 0px 0px 20px 0px;
            font-size: 14px;
            width: 52%;
            margin-left: 30px;

            @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 70%;
        margin-left: 30px;
      }
        }
    }

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
        margin-left: 40px;
      }
`