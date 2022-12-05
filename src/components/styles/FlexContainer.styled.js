import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    // align-items: center;
    width: 100%;
    // padding: 20px 40px 20px 0px;

    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;


    div {
        padding-left: 70px;
        margin: 5px 40px 55px 50px;
        margin-left: 50px;
        // margin-right: 50px;
        // text-align: center;
        width: 50%;

        h1 {
            width: 50%;
        // text-align: left;

 
        }

        p {
            font-size: 24px;
            width: 60%;
            margin-top: 14px;
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
        // flex-direction: column; 
        width: 120%;   
        margin-bottom: 40px;
        }
    }

    span {
        padding-top: 20px; 
        margin-right: 80px;


    }

        h3 {
            color: #FFD05A;
            font-size: 16px;
            // padding: 10px;
            margin-top: 10px;
            
        }

        h1 {
            font-size: 50px;
            width: 100%;
            padding-top: 10px 0 10px 0;
        }

        p {
            color: #5B8E7D;
            width: 60%;
            font-size: 26px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

    h3 {
        color: #FFD05A;
        font-size: 16px;
        // padding: 10px;
        margin-top: 30px;
        margin-bottom: 15px;
        // width: 100%;

        // @media (max-width: 500px) {
        //     width: 300px;
        // align-items: center;
    }
        
    }

    ul {
        // width: 60
        // margin-top: 5px;
        margin-right: 2px;
        text-align: left;

        @media (max-width: ${({ theme }) => theme.mobile}) {
        // flex-direction: row;
        // width: 70%;
        text-align: center;
		margin-bottom: 20px; 
      }
    }

    li {
        text-align: left;
        font-Size: 14px;

             @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
		margin-bottom: 20px; 
      }
    }

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;    
    }
`