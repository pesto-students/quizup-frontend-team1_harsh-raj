import { Flex } from "./styled/Flex.styled";
import {
	StyledInfobar,
	SectionTitle,
	SectionBody,
	QuestionBox,
} from "./styled/Infobar.styled";

function Infobar() {
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
					<QuestionBox>2</QuestionBox>
					<QuestionBox>3</QuestionBox>
					<QuestionBox>4</QuestionBox>
					<QuestionBox>5</QuestionBox>
					<QuestionBox>6</QuestionBox>
					<QuestionBox>7</QuestionBox>
					<QuestionBox>8</QuestionBox>
				</Flex>
			</SectionBody>
		</StyledInfobar>
	);
}

export default Infobar;
