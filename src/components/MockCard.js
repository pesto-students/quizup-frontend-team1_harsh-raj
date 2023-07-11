import { Link } from "react-router-dom";
import { StyledMockCard, StyledIcon, Button } from "./styled/MockCard.styled";

function MockCard({ item: { title, image, _id } }) {
	return (
		<StyledMockCard>
			<StyledIcon>{image && <img src={image} alt={title} />}</StyledIcon>
			<p>{title}</p>
			<Link to={`/exam/${_id}`}>
				<Button>Explore tests</Button>
			</Link>
		</StyledMockCard>
	);
}

export default MockCard;
