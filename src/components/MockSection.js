import MockCard from "./MockCard";
import { Flex } from "./styled/Flex.styled";
import { StyledMockSection } from "./styled/MockSection.styled";
import examData from "../examData";
import { StyledButton } from "./styled/Button.styled";

function MockSection() {
	return (
		<StyledMockSection>
			<Flex seeMoreBtn>
				<h3>Here are some Exams for you to explore...</h3>
				<StyledButton>See More</StyledButton>
			</Flex>
			<Flex>
				{examData.slice(0, 5).map((item, index) => (
					<MockCard key={index} item={item} />
				))}
			</Flex>
		</StyledMockSection>
	);
}

export default MockSection;
