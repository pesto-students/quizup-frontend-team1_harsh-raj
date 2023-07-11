import React from "react";
import { Container } from "../components/styled/Container.styled";

import {
	Delete,
	DeleteContainer,
} from "../components/styled/DeleteTest.styled";
import { BsXCircleFill } from "react-icons/bs";

function DeleteQuiz() {
	return (
		<>
			<Container>
				<Delete>
					<h1>Delete Quiz</h1>
					<DeleteContainer>
						<div>
							<BsXCircleFill color="DB2D37" size={27} />
						</div>
						<b>
							<p>Quiz 1</p>
						</b>
					</DeleteContainer>
				</Delete>
			</Container>
		</>
	);
}
export default DeleteQuiz;
