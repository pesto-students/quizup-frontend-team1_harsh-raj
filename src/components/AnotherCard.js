import { StyledAnotherCard } from "./styles/AnotherCard.styled";
import { CardContainer } from "./styles/MockCard.styled";

function AnotherCard() {
	return (
		<CardContainer>
			<StyledAnotherCard>
				<h1>AI reports</h1>
				<p>The AI generated reports will help you know the topics that you need to focus more on.</p>
			</StyledAnotherCard>
			<StyledAnotherCard>
				<h1>Affordable</h1>
				<p>Our affordable pricing ensures that learning never stops.</p>
			</StyledAnotherCard>
		</CardContainer>
	)
}

export default AnotherCard;


