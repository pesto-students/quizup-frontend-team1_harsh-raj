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

export const StyledQuestion = styled.div`
  input {
    justify-content: center;
    text-align: center;
    width: 350px;
    height: 100px;
  }
`;

export const StyledAnswerConatiner = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledAnswer1 = styled.div`
  input {
    width: 300px;
    height: 60px;
    text-align: center;
    background: url(/images/admin-dashboard/Polygon.svg) left no-repeat;
    background-size: 30px;
  }
`;

export const StyledAnswer2 = styled.div`
  input {
    width: 300px;
    height: 60px;
    text-align: center;
    background: url(/images/admin-dashboard/Rombus.svg) left no-repeat;
    background-size: 30px;
  }
`;

export const StyledAnswer3 = styled.div`
  input {
    width: 300px;
    height: 60px;
    text-align: center;
    background: url(/images/admin-dashboard/Ellipse.svg) left no-repeat;
    background-size: 30px;
  }
`;

export const StyledAnswer4 = styled.div`
  input {
    width: 300px;
    height: 60px;
    text-align: center;
    background: url(/images/admin-dashboard/Rectangle.svg) left no-repeat;
    background-size: 30px;
  }
`;
