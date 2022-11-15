import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function TestCard({ test: { name } }) {
	return (
		<StyledMockCard>
			<StyledIcon>
				<img src={`/images/exam-icons/test_icon.svg`} alt={name} />
			</StyledIcon>
			<p>{name}</p>
			<Button>Explore tests</Button>
		</StyledMockCard>
	);
}

export default TestCard;
