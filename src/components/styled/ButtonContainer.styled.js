import styled from "styled-components";

export const ButtonContainer=styled.div`
display:flex;
align-items: flex-start;
flex-direction:column;
margin-top:50px;
`
export const StyledYellowButton=styled.button`
width: 150px;
height: 50px;
padding: 10px;
background-color:rgba(255, 208, 90, 0.3);
border: none;
border-radius: 10px;
font-size: 1rem;
cursor: pointer;
transition: 0.2s ease;

&:hover {
  opacity: 0.9;
}
`
export const StyledGreenButton=styled.button`
width: 150px;
height: 50px;
padding: 10px;
background-color:rgba(91, 142, 125, 0.3);
border:none;
border-radius: 10px;
font-size: 1rem;
cursor: pointer;
transition: 0.2s ease;
margin-top:50px;
&:hover {
  opacity: 0.9;
}
`