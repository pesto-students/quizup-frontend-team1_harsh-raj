import { Flex } from "./styled/Flex.styled";
import { StyledMockForm } from "./styled/MockQuePanel.styled";
function MockQueForm() {
	return (
		<>
			<h1>Mock test name</h1>

			<StyledMockForm>
				<form>
					<Flex>
						<label>Q1.</label>
						<textarea
							type="text"
							name="question"
							placeholder="Start Typing Your Question"
							required
						/>
					</Flex>

					<Flex mockquestion>
						<div>
							<input type="radio" name="answer" id="ans1" />
							<input type="text" name="answer 1" placeholder="Add option 1" />
						</div>
						<div>
							<input type="radio" name="answer" id="ans2" />
							<input type="text" name="answer 2" placeholder="Add option 2" />
						</div>
					</Flex>

					<Flex mockquestion>
						<div>
							<input type="radio" name="answer" id="ans3" />
							<input type="text" name="answer 3" placeholder="Add option 3" />
						</div>
						<div>
							<input type="radio" name="answer" id="ans4" />
							<input type="text" name="answer 4" placeholder="Add option 4" />
						</div>
					</Flex>
				</form>
			</StyledMockForm>
		</>
	);
}

export default MockQueForm;
