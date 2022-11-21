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

export const StyledMockForm = styled.form`
  input {
    diplay: flex;
    justify-content: space-between;
    text-align: center;
    width: 300px;
    height: 60px;
  }
  input[name="question"] {
    width: 350px;
    height: 100px;
  }
  input[name=" answer 1"] {
    background: url(/images/admin-dashboard/tick.svg) right no-repeat;
    background-size: 30px;
  }
  input[name="answer 2"] {
    background: url(/images/admin-dashboard/tick.svg) right no-repeat;
    background-size: 30px;
  }
  input[name="answer 3"] {
    background: url(/images/admin-dashboard/tick.svg) right no-repeat;
    background-size: 30px;
  }
  input[name="answer 4"] {
    background: url(/images/admin-dashboard/tick.svg) right no-repeat;
    background-size: 30px;
    background-color: white;
  }
`;
