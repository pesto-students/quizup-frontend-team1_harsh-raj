import { Flex } from "./styled/Flex.styled";
import {
	StyledInfobar,
	SectionTitle,
	SectionBody,
	QuestionBox,
} from "./styled/Infobar.styled";
import { useSelector } from "react-redux";

function Infobar() {
	const { test } = useSelector((state) => state.tests);

	return (
		<StyledInfobar>
			<div className="timer">
				<p>Time Left</p>
				<div>
					<p>00:54:05</p>
				</div>
			</div>

			<SectionTitle>Questions</SectionTitle>
			<SectionBody>
				<Flex wrap>
					{test.questions
						? test.questions.map((question, index) => (
								<QuestionBox key={question._id}>{index + 1}</QuestionBox>
						  ))
						: null}
				</Flex>
			</SectionBody>
		</StyledInfobar>
	);
}

export default Infobar;
