import styled from "styled-components";

export const Container = styled.div`
padding: 30px 50px;

button{
  text-align:center;
  font-size: 22px;
  margin:20px;
  height:40px;
  width:100px;
}
`

export const StyledMockForm = styled.form`
input{
  diplay:flex;
  justify-content:space-between;
  text-align:center;
  width:300px;
  height:60px;
}
input[name=question]{
  width:350px;
  height:100px
}
`