import {
	AnalyticsCard,
	TrendingCard,
	StyledBarGraph,
} from "./styled/AnalyticsCards.styled";
import BarChart from "./styled/BarChart";
import { Flex } from "./styled/Flex.styled";

function AdminCards() {
	return (
		<>
			<Flex analytics>
				<AnalyticsCard>
					<h4>Mock tests attempted by users this month</h4>
					<p>152</p>
				</AnalyticsCard>
				<AnalyticsCard>
					<h4>Number of Mock tests</h4>
					<p>25</p>
				</AnalyticsCard>
				<AnalyticsCard>
					<h4>Number of Quizzes</h4>
					<p>12</p>
				</AnalyticsCard>
				<TrendingCard>
					<h4>Trending topics Mock tests</h4>
					<div>
						<ol>
							<li>UPSC</li>
							<li>SBI PO</li>
							<li>CTET</li>
							<li>NDA </li>
							<li>CDS</li>
						</ol>
					</div>
				</TrendingCard>
			</Flex>

			<h2>Analytics</h2>
			<Flex barChart>
				<StyledBarGraph>
					<BarChart />
				</StyledBarGraph>

				<TrendingCard>
					<h4>Trending topics Quiz tests</h4>
					<ol>
						<li>TypeScript</li>
						<li>Python</li>
						<li>React</li>
						<li>Java </li>
						<li>JavaScrit</li>
					</ol>
				</TrendingCard>
			</Flex>
		</>
	);
}

export default AdminCards;

// <StyleTrendingCard>
// <p>Trending topics Mock tests</p>
// <p>1.UPSC Civil Services</p>
// <p>2.SBI PO</p>
// <p>3.CTET</p>
// <p>4.NDA</p>
// <p>5.CDS</p>
// </StyleTrendingCard>

// <p>1.TypeScript</p>
// <p>2.</p>
// <p>3.</p>
// <p>4.</p>
// <p>5.</p>
