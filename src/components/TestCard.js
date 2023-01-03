import { Link } from "react-router-dom";
import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function TestCard({ test: { title, _id } }) {
	return (
		<StyledMockCard>
			<StyledIcon>
				<img src={`/images/test_icon.svg`} alt={title} />
			</StyledIcon>
			<p>{title}</p>
			<Link to={`/instructions/${_id}`}>
				<Button>Start Now</Button>
			</Link>
		</StyledMockCard>
	);
}

export default TestCard;
