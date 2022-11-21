import {
  StyledFalse,
  StyledQuestionTF,
  StyledTrue,
} from "./styled/QuizQueT&F.styled";

function QuizQueTFForm() {
  return (
    <>
      <StyledQuestionTF>
        <label>
          Q2.
          <input
            type="text"
            name="question"
            placeholder="Start Typing Your Question"
          />
        </label>
      </StyledQuestionTF>

      <StyledTrue>
        <input type="text" name=" True" placeholder="True" />
      </StyledTrue>
      <StyledFalse>
        <input type="text" name=" False" placeholder="False" />
      </StyledFalse>
    </>
  );
}

export default QuizQueTFForm;
