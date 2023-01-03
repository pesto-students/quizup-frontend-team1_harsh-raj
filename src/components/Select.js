import { StyledSelect } from "./styled/Select.styled";


// Create a mock test --> 1.choose an Exam path="/create/mock" 
export function SelectMockExam() {
  return (
    <StyledSelect>
      <option selected value="select">
        Select Exam
      </option>
      <option value="ssc">SSC</option>
      <option value="banking">Banking</option>
      <option value="railways">Railways</option>
      <option value="civil service">Civil Service</option>
    </StyledSelect>
  );
}

// Create a mock test --> 2.choose a Test path="/create/mock" 
export function SelectMockTest() {
  return (
    <StyledSelect>
      <option selected value="select">
        Select Test
      </option>
      <option value="cgl">SSC CGL</option>
      <option value="chsl">SSC CHSL</option>
      <option value="cpo">SSC CPO</option>
      <option value="mts">SSC MTS</option>
    </StyledSelect>
  );
}

// Create Quiz --> 2.choose a Quiz Topic path="/create/quiz" 
export function SelectQuizTopic() {
  return (
    <StyledSelect>
      <option selected value="select">
        Select Quiz Topic
      </option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
      <option value="react">React</option>
    </StyledSelect>
  );
}
