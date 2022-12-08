import { StyledPriceCard, StyledPriceCard2 } from "./styles/PriceCard.styled";
import { FaCheckSquare, FaWindowClose } from "react-icons/fa";
import { BiRupee, BiCheckSquare } from "react-icons/bi";
import { GetButton } from "./styles/Button.styled";
import { CardContainer } from "./styles/MockCard.styled";

function PriceCard() {
	return (
		<CardContainer>
			<StyledPriceCard>
				<h1>Basic</h1>
				<h2>Free Forever</h2>
				<div>
					{" "}
					<FaCheckSquare size={22} /> <p>Large collection of Mock Tests</p>
				</div>
				<div>
					{" "}
					<FaCheckSquare size={22} /> <p>Upto 5 Mock Tests</p>
				</div>
				<div>
					{" "}
					<FaWindowClose size={22} /> <p>Upto 5 Mock Tests</p>
				</div>
				<div>
					<GetButton>Get Started </GetButton>
				</div>
			</StyledPriceCard>
			<StyledPriceCard2>
				<h1>Pro</h1>
				<div>
					<BiRupee size={30} /> <h2>99/month</h2>
				</div>
				<div>
					{" "}
					<BiCheckSquare size={22} /> <p>Large collection of Mock tests</p>
				</div>
				<div>
					{" "}
					<BiCheckSquare size={22} /> <p>Unlimited Mock Tests</p>
				</div>
				<div>
					{" "}
					<BiCheckSquare size={22} /> <p>Detailed performance report</p>
				</div>
				<div>
					<GetButton>Get Started </GetButton>
				</div>
			</StyledPriceCard2>
		</CardContainer>
	);
}

export default PriceCard;
