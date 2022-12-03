import { Titlebar } from "../components/styled/Instructions.styled";
import { Flex } from "../components/styled/Flex.styled";
import Infobar from "../components/Infobar";
import { StyledButton } from "../components/styled/Button.styled";

function MockQuestion() {
	return (
		<div style={{ height: "100vh" }}>
			<Titlebar>
				<Flex titlebar>
					<img src="/images/logo-gradient.svg" alt="quizup logo" />
					<p>SSC CGL - Mock Test</p>
				</Flex>
			</Titlebar>
			<Flex question>
				<Flex layout="column" buttons>
					<div className="wrapper">
						<h2>Question 1</h2>
						<div className="question">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								ut accumsan enim. Proin tortor dolor, elementum sit amet dui id,
								eleifend vulputate lectus. Vivamus mattis vestibulum libero non
								gravida. Mauris feugiat nisl quis nulla ullamcorper lacinia sed
								id lectus. Nunc nisi lorem, viverra eget ligula et, tincidunt
								lacinia nisl. Vestibulum in lectus enim. Morbi viverra at turpis
								ac sodales. Etiam fermentum nisi eget luctus tincidunt. Nullam
								pharetra egestas bibendum. In ac sapien mattis, mattis dolor at,
								molestie nulla. Phasellus ut elementum sem. Nulla facilisi.
								Phasellus placerat, dui in vehicula posuere, ipsum turpis
								lobortis neque, at semper turpis magna vitae mi.
							</p>
						</div>
						<div className="answers">
							<div>
								<input type="radio" name="option" id="a" />
								<label htmlFor="a">A. First choice</label>
							</div>
							<div>
								<input type="radio" name="option" id="b" />
								<label htmlFor="b">B. Second choice</label>
							</div>
							<div>
								<input type="radio" name="option" id="c" />
								<label htmlFor="c">C. Third choice</label>
							</div>
							<div>
								<input type="radio" name="option" id="d" />
								<label htmlFor="d">D. Fourth choice</label>
							</div>
						</div>
					</div>
					<Flex btnAlign>
						<div>
							<StyledButton color="#E87121">Previous</StyledButton>
							<StyledButton color="#E87121">Next</StyledButton>
						</div>
						<StyledButton>Submit</StyledButton>
					</Flex>
				</Flex>
				<Infobar />
			</Flex>
		</div>
	);
}

export default MockQuestion;
