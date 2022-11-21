import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  height: 350px;
  width: 400px;
  border-radius: 20px;
  background-color: #ffd05a33;

  h1 {
    padding-top: 15px;
    margin-top: 0;
  }
  button {
    border: none;
    height: 50px;
    width: 200px;
    margin-top: 25px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  button[id="Google"] {
    background: url(/images/google.svg) left no-repeat;
    background-size: 25px;
    background-color: white;
  }
`;
export const StyledLoginTitle = styled.div`
  img {
    width: 40px;
  }
`;
