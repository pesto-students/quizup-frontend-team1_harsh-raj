import { Flex } from "./styled/Flex.styled";
import {
  StyledQuestion,
  StyledAnswer1,
  StyledAnswer2,
  StyledAnswer3,
  StyledAnswer4,
  StyledAnswerConatiner,
} from "./styled/QuizQueMCQ";

function QuizQueForm() {
  return (
    <>
      <StyledQuestion>
        <label>
          Q1.
          <input
            type="text"
            name="question"
            placeholder="Start Typing Your Question"
          />
        </label>
      </StyledQuestion>
      <StyledAnswerConatiner>
        <StyledAnswer1>
          <input type="text" name=" answer 1" placeholder="Add Answer 1" />
        </StyledAnswer1>
        <StyledAnswer2>
          <input type="text" name="answer 2" placeholder="Add Answer 2" />
        </StyledAnswer2>
        <StyledAnswer3>
          <input type="text" name="answer 3" placeholder="Add Answer 3" />
        </StyledAnswer3>
        <StyledAnswer4>
          <input type="text" name="answer 4" placeholder="Add Answer 4" />
        </StyledAnswer4>
      </StyledAnswerConatiner>
    </>
  );
}

export default QuizQueForm;
