import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#5B8E7D'};
    color: ${({ color }) => color || '#fff'};

    &:hover {
        opacity: 0.9;
        transfrom: scale(0.98);
    }
`
export const GetButton = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    padding: 15px 30px;
    margin: 10px;
    background-color: ${({ bg }) => bg || '#FFD05A'};
    color: ${({ color }) => color || '#000'};

    &:hover {
        opacity: 0.9;
        transfrom: scale(0.98);
    }

        @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
      }
`

