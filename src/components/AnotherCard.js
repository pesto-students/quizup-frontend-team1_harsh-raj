import { StyledAnotherCard } from "./styles/AnotherCard.styled";
import { CardContainer } from "./styles/MockCard.styled";

function AnotherCard() {
	return (
		<CardContainer>
			<StyledAnotherCard>
				<h2>AI reports</h2>
				<p>
					The AI generated reports will help you know the topics that you need
					to focus more on.
				</p>
			</StyledAnotherCard>
			<StyledAnotherCard>
				<h2>Affordable</h2>
				<p>Our affordable pricing ensures that learning never stops.</p>
			</StyledAnotherCard>
		</CardContainer>
	);
}

export default AnotherCard;
