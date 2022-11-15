import { Link } from "react-router-dom";
import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function TestCard({ test: { name, id } }) {
	return (
		<StyledMockCard>
			<StyledIcon>
				<img src={`/images/exam-icons/test_icon.svg`} alt={name} />
			</StyledIcon>
			<p>{name}</p>
			<Link to={`/instructions/${id}`}>
				<Button>Start Now</Button>
			</Link>
		</StyledMockCard>
	);
}

export default TestCard;
