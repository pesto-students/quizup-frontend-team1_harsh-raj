import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function MockCard({ item: { name, image } }) {
	return (
		<StyledMockCard>
			<StyledIcon>
				<img src={`./images/exam-icons/${image}`} alt={name} />
			</StyledIcon>
			<p>{name}</p>
			<Button>Explore tests</Button>
		</StyledMockCard>
	);
}

export default MockCard;
