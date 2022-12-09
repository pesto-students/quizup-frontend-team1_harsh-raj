import styled from "styled-components";

export const StyledEditProfileCard = styled.div`
display:flex;
justify-content:center;
height:300px;
width:800px;

}
input{
  width:500px;
  height:40px;
  border-style: ridge;
  border-width:1px;
  border-radius: 4px;
}
input[name=About]{
  height:100px;
}

&th, td{
  padding: 25px;
}
`;
