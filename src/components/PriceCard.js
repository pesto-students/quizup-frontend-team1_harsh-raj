import { StyledPriceCard, StyledPriceCard2 } from "./styles/PriceCard.styled";
import { FaCheckSquare, FaWindowClose } from "react-icons/fa";
import { BiRupee,BiCheckSquare } from "react-icons/bi";
import {GetButton} from  "./styles/Button.styled"

function PriceCard() {
	return (
		<> 
		<StyledPriceCard>
			<h1>Basic</h1>
			<h2>Free Forever</h2>
			<div> <FaCheckSquare /> <p>Large collection of Mock Tests</p></div>
			<div> <FaCheckSquare /> <p>Upto 5 Mock Tests</p></div>
			<div> <FaWindowClose /> <p>Upto 5 Mock Tests</p></div>
			<div><GetButton>Get Started </GetButton></div>
		</StyledPriceCard>
		<StyledPriceCard2>
			<h1>Pro</h1>
			<h2><BiRupee />99/month</h2>
			<div> < BiCheckSquare/> <p>Large collection od Mock tests</p></div>
			<div> < BiCheckSquare/> <p>Unlimited Mock Tests</p></div>
			<div> < BiCheckSquare/> <p>Detailed performance report for each Mock test</p></div>
			<div><GetButton>Get Started </GetButton></div>			
		</StyledPriceCard2>
			
		</>
	)
}

export default PriceCard;






