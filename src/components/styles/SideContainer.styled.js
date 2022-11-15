import styled from "styled-components";

export const SideContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
    width: 100%;
    // justify-content: space-between;

    div {
        display: flex;
        // width: 50%;
        // padding: 10px;
        margin-bottom: 10px;

        p {
            color: #5B8E7D;
            width: 60%;
            font-size: 12px;
            // padding-top: 10px 0px 0x 20px;
            margin-left: 20px;
            text-align: left;

        }
        

        ul {
            margin: 5px;
        }

        

        h1 {
            font-size: 60px;
            width: 70%;
            padding: 10px;
        }

        // p {
        //     color: #5B8E7D;
        //     width: 60%;
        //     font-size: 26px;
        //     // padding-top: 10px 40px 10px 10px;
        // }

    }

    h3 {
        color: #FFD05A;
        font-size: 16px;
        // padding: 10px;
        text-align: left;
        margin-bottom: 10px;

        
    }

    ul {
        p {
            color: white;
            text-align: left;
            padding: 0px 0px 20px 0px;
            font-size: 14px;
            width: 80%;
        }
    }

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
      }
`