import { StyledIcon, Button } from "./styled/MockCard.styled";
import { StyledQuizCard } from "./styled/QuizCard.styled";

function QuizCard({ item: { name, price, time, image } }) {
	return (
		<StyledQuizCard>
			<div className="price">
				<p>{`₹${price}`}</p>
			</div>
			<StyledIcon>
				<img src={`./images/quiz-icons/${image}`} alt={name} />
			</StyledIcon>
			<p>{name}</p>
			<p className="time">{`${time} mins left`}</p>
			<Button>Play Now</Button>
		</StyledQuizCard>
	);
}

export default QuizCard;
