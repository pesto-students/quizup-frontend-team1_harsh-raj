import React from 'react'
// import ResultLeaderboard from '../components/ResultLeaderboard'
import Sidebar from '../components/Sidebar'
import { Container } from '../components/styled/Container.styled'
import { Flex } from '../components/styled/Flex.styled'
import { StyledLeaderboard, StyledTable, StyledHr } from '../components/styled/Leaderboard.styled'

export default function Leaderboard() {
  return (
    <> 
    <Flex>
      <Sidebar />
    <Container>
      <StyledLeaderboard>
        <h1>Select Quiz</h1>
        <StyledTable>
          <tr>
            <th>Quiz</th>
            <th>Duration</th>
            <th>Entry fee</th>
            <th>Result announced</th>
          </tr>

          <StyledHr />

          <tr>
            <td>HTML</td>
            <td>20 minutes</td>
            <td>Rs 25/-</td>
            <td>03-11-2022 18:30</td>
          </tr>

          <StyledHr />

          <tr>
            <td>JavaScipt</td>
            <td>25 minutes</td>
            <td>Rs 45/-</td>
            <td>03-11-2022 12:30</td>
          </tr>

          <StyledHr />

          <tr>
            <td>Python</td>
            <td>15 minutes</td>
            <td>Rs 15/-</td>
            <td>03-11-2022 11:30</td>
          </tr>

          <StyledHr />

          <tr>
            <td>Swift</td>
            <td>20 minutes</td>
            <td>Rs 25/-</td>
            <td>03-11-2022 10:00</td>
          </tr>

          <StyledHr />

          <tr>
            <td>CSS</td>
            <td>20 minutes</td>
            <td>Rs 35/-</td>
            <td>03-11-2022 17:35</td>
          </tr>

          <StyledHr />

          <tr>
            <td>React</td>
            <td>25 minutes</td>
            <td>Rs 45/-</td>
            <td>03-11-2022 14:30</td>
          </tr>

          <StyledHr />

          <tr>
            <td>NodeJS</td>
            <td>30 minutes</td>
            <td>Rs 55/-</td>
            <td>03-11-2022 11:30</td>
          </tr>

          <StyledHr />
        </StyledTable>
      </StyledLeaderboard>
    </Container>
    </Flex>
    </>
  )
}
