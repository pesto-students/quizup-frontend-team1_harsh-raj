import { Link } from "react-router-dom";
import { StyledIcon, Button } from "./styled/MockCard.styled";
import { StyledQuizCard } from "./styled/QuizCard.styled";

function QuizCard({ item: { name, price, time, image, id } }) {
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
			<Link to={`/quizdetails/${id}`}>
				<Button>Play Now</Button>
			</Link>
		</StyledQuizCard>
	);
}

export default QuizCard;
