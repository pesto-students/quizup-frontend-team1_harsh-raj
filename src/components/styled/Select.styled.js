import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 50px;
  & ol {
    margin-bottom: 50px;
  }

  & ol > li {
    font-size: 25px;
    margin: 10px;
  }
`;

// DropDown Box Styled
export const StyledSelect = styled.select`
  width: 250px;
  height: 30px;
  border-radius: 5px;
`;

// Enter TIME Box Styeled
export const StyledInputTime = styled.input`
  width: 250px;
  height: 30px;
`;
