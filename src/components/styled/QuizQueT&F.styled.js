import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 50px;

  button {
    text-align: center;
    font-size: 22px;
    margin: 20px;
    height: 40px;
    width: 100px;
  }
`;

export const StyledQuestionTF = styled.div`
  input {
    font-size: 20px;
    justify-content: center;
    text-align: center;
    width: 350px;
    height: 100px;
  }
`;

export const StyledTrue = styled.div`
  input {
    font-size: 25px;
    width: 300px;
    height: 150px;
    text-align: center;
    background: url(/images/admin-dashboard/Polygon.svg) left no-repeat;
    background-size: 50px;
  }
`;
export const StyledFalse = styled.div`
  input {
    font-size: 25px;
    width: 300px;
    height: 150px;
    text-align: center;
    background: url(/images/admin-dashboard/Rombus.svg) left no-repeat;
    background-size: 50px;
  }
`;
