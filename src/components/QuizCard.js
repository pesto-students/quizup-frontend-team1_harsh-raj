import { Link } from "react-router-dom";
import { StyledIcon, Button } from "./styled/MockCard.styled";
import { StyledQuizCard } from "./styled/QuizCard.styled";

function QuizCard({ item: { title, price, duration, _id } }) {
	return (
		<StyledQuizCard>
			<div className="price">
				<p>{`₹${price}`}</p>
			</div>
			<StyledIcon>
				{/* <img src={`./images/quiz-icons/${image}`} alt={name} /> */}
			</StyledIcon>
			<p>{title}</p>
			<p className="time">{`${duration} mins`}</p>
			<Link to={`/quizdetails/${_id}`}>
				<Button>Play Now</Button>
			</Link>
		</StyledQuizCard>
	);
}

export default QuizCard;
