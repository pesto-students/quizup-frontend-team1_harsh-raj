import {
  NumberOfCard,
  StyleTrendingCard,
  StyledBarGraph,
} from "../components/styled/AdminCardsContainer.styled";
import BarChart from "./styled/BarChart";
import { Flex } from "./styled/Flex.styled";

function AdminCards() {
  return (
    <>
      {/* First Three Cards in Row */}
      <Flex>
        <NumberOfCard>
          <p>Mocktests attempted by users this month</p>
          <h4>152</h4>
        </NumberOfCard>
        <NumberOfCard>
          <p>Number of Mock tests</p>
          <h4>25</h4>
        </NumberOfCard>
        <NumberOfCard>
          <p>Number of Quizzes</p>
          <h4>12</h4>
        </NumberOfCard>
      </Flex>

      {/* First Three Cards in Row */}

      {/* Two Cards of trending Column */}
      <Flex column>
        <StyleTrendingCard>
          <p>Trending topics Mock tests</p>
          <ol>
            <li value="1">UPSC</li>
            <li>SBI PO</li>
            <li>CTET</li>
            <li>NDA </li>
            <li>CDS</li>
          </ol>
        </StyleTrendingCard>

        <StyleTrendingCard>
          <p>Trending topics Quiz tests</p>
          <ol>
            <li value="1">TypeScript</li>
            <li>Python</li>
            <li>React</li>
            <li>Java </li>
            <li>JavaScrit</li>
          </ol>
        </StyleTrendingCard>
      </Flex>
      {/* Two Cards of trending Column */}

      {/* Bar Chart */}
      <Flex barChart>
        <StyledBarGraph>
          <BarChart />
        </StyledBarGraph>
      </Flex>

      {/* Bar Chart */}
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
