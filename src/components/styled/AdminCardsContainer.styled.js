import styled from "styled-components";

// First Three Cards in Row
export const NumberOfCard = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 15px;
  background-color: rgba(91, 142, 125, 0.2);
  padding: 15px;
  margin-top: 40px;
  margin-right: 50px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  h4 {
    color: rgba(255, 148, 0, 1);
  }
`;

// Trending Column
export const StyleTrendingCard = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 15px;
  background-color: rgba(91, 142, 125, 0.2);
  padding: 15px;
  margin-top: 50px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
`;

// BarGraph Section

// Graph Background Container
export const StyledBarGraph = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 15px;
  background-color: rgba(255, 208, 90, 0.1);
  padding: 15px;
  margin-top: 50px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
`;
// Graph itself Tag in ./styled/BarChart
export const ChartBox = styled.div`
  width: 550px;
`;
