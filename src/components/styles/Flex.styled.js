import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    // align-items: center;
    width: 100%;
    padding-top: 30px;
    justify-content: space-between;

    div {
        // width: 50%;
        padding: 10px;
        margin-bottom: 10px;

        p {
            color: #5B8E7D;
            width: 60%;
            font-size: 26px;
            // padding-top: 10px 40px 10px 10px;
        }
        

        ul {
            margin: 5px;
        }

        h3 {
            color: #FFD05A;
            font-size: 16px;
            padding: 10px;
            
        }

        h1 {
            font-size: 60px;
            width: 70%;
            padding: 10px;
        }

        p {
            color: #5B8E7D;
            width: 60%;
            font-size: 26px;
            // padding-top: 10px 40px 10px 10px;
        }

    h3 {
        color: #FFD05A;
        font-size: 16px;
        // padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        
    }

    ul {
        margin-right: 2px;
        text-align: left;
    }

    li {
        text-align: left;
        font-Size: 14px;
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