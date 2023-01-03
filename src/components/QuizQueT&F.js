import { Flex } from "./styled/Flex.styled";
import { StyledMockForm } from "./styled/MockQuePanel.styled";

function QuizQueTFForm() {
	return (
		<>
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
							<input type="radio" name="answer" id="true" />
							<label className="radiobtn" htmlFor="true">
								True
							</label>
						</div>
						<div>
							<input type="radio" name="answer" id="false" />
							<label className="radiobtn" htmlFor="false">
								False
							</label>
						</div>
					</Flex>
				</form>
			</StyledMockForm>
		</>
	);
}

export default QuizQueTFForm;
