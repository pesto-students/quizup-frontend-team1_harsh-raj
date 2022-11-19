import React from 'react'
import Sidebar from './Sidebar'
import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'
import { StyledLeaderboardQuiz, Table, Hr } from './styled/LeaderboardQuiz.styled'

export default function LeaderboardQuiz() {
    return (
        <>
            <Flex>
                <Sidebar />
                <Container>
                    <StyledLeaderboardQuiz>
                        <h1>Leaderboard - HTML Quiz</h1>
                        <Table>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Points</th>
                                <th>Prize amount</th>
                                <th>Status</th>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 1 </td>
                                <td>Harsh </td>
                                <td>harsh@gmail.com </td>
                                <td> 510</td>
                                <td>Rs 150/-</td>
                                <td>Completed </td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 2 </td>
                                <td>Chetan</td>
                                <td>chetan@gmail.com </td>
                                <td>490</td>
                                <td>Rs 100/-</td>
                                <td>Completed</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 3 </td>
                                <td>Yash </td>
                                <td>Yash@gmail.com </td>
                                <td>460</td>
                                <td>Rs 50/-</td>
                                <td>Pending</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 4 </td>
                                <td>Pankaj </td>
                                <td>pankaj@gmail.com </td>
                                <td>445</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 5 </td>
                                <td>Adiya</td>
                                <td>aditiya@gmail.com </td>
                                <td>400</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 6 </td>
                                <td>Sameer</td>
                                <td>sameer@gmail.com </td>
                                <td>415</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 7 </td>
                                <td>Rahul</td>
                                <td>rahul@gmail.com </td>
                                <td>400</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>
                            <Hr />
                            <tr>
                                <td> 8 </td>
                                <td>Manish</td>
                                <td>manish@gmail.com </td>
                                <td>385</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>
                            <Hr />

                            <tr>
                                <td> 9 </td>
                                <td>Jagdish</td>
                                <td>jag@gmail.com </td>
                                <td>370</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>

                            <Hr />

                            <tr>
                                <td> 10 </td>
                                <td>John</td>
                                <td>john@gmail.com </td>
                                <td>350</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>

                            <Hr />
                        </Table>
                    </StyledLeaderboardQuiz>
                </Container>
            </Flex>
        </>
    )
}
