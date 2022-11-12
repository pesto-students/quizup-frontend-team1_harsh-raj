import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    padding: 60px;
    justify-content: space-between;

    div {
        width: 50%;
        padding: 0px 20px 0px 70px;
        // bottom-margin: 10px;

        h3 {
            color: #FFD05A;
            font-size: 16px;
            
        }

        h1 {
            font-size: 60px;
            padding: 10px;
        }

        p {
            color: #5B8E7D;
            font-size: 28px;
            padding-top: 10px 40px 10px 10px;
        }

    }

    & > div,
    & > ul {
        flex: 1;
    }
`