import { StyledMockForm } from "./styled/MockQuePanel.styled";
function MockQueForm() {
  return (
    <>
      <StyledMockForm>
        <label>
          Q1.
          <input
            type="text"
            name="question"
            placeholder="Start Typing Your Question"
          />
        </label>

        <input type="text" name=" answer 1" placeholder="Add Answer 1" />

        <input type="text" name="answer 2" placeholder="Add Answer 2" />

        <input type="text" name="answer 3" placeholder="Add Answer 3" />

        <input type="text" name="answer 4" placeholder="Add Answer 4" />
      </StyledMockForm>
    </>
  );
}

export default MockQueForm;