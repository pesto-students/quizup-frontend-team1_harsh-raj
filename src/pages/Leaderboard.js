import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";
import { StyledTable } from "../components/styled/Leaderboard.styled";

export default function Leaderboard() {
	return (
		<>
			<Flex>
				<Sidebar />
				<Container>
					<h1>Select Quiz</h1>
					<StyledTable>
						<tr>
							<th>Quiz</th>
							<th>Duration</th>
							<th>Entry fee</th>
							<th>Result announced</th>
						</tr>

						<tr>
							<td>
								<Link to={"/result/html"}>HTML</Link>
							</td>
							<td>20 minutes</td>
							<td>Rs 25/-</td>
							<td>03-11-2022 18:30</td>
						</tr>

						<tr>
							<td>JavaScipt</td>
							<td>25 minutes</td>
							<td>Rs 45/-</td>
							<td>03-11-2022 12:30</td>
						</tr>

						<tr>
							<td>Python</td>
							<td>15 minutes</td>
							<td>Rs 15/-</td>
							<td>03-11-2022 11:30</td>
						</tr>

						<tr>
							<td>Swift</td>
							<td>20 minutes</td>
							<td>Rs 25/-</td>
							<td>03-11-2022 10:00</td>
						</tr>

						<tr>
							<td>CSS</td>
							<td>20 minutes</td>
							<td>Rs 35/-</td>
							<td>03-11-2022 17:35</td>
						</tr>

						<tr>
							<td>React</td>
							<td>25 minutes</td>
							<td>Rs 45/-</td>
							<td>03-11-2022 14:30</td>
						</tr>

						<tr>
							<td>NodeJS</td>
							<td>30 minutes</td>
							<td>Rs 55/-</td>
							<td>03-11-2022 11:30</td>
						</tr>
					</StyledTable>
				</Container>
			</Flex>
		</>
	);
}
