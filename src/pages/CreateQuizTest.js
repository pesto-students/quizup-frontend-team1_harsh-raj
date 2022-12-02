import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { StyledButton } from "../components/styled/Button.styled";
import { Flex } from "../components/styled/Flex.styled";
import { Container, StyledInput } from "../components/styled/Select.styled";

function CreateQuizTest() {
	return (
		<Flex>
			<AdminSidebar />
			<Container>
				<h1>Create Quiz</h1>
				<div className="wrapper">
					<form>
						<ol>
							<li value="1">Enter Quiz Name</li>
							<StyledInput
								type={"text"}
								placeholder="Enter Quiz name"
								name="title"
								required
							/>
							<li>Enter Time Limit</li>
							<StyledInput
								type="number"
								placeholder="Enter Time in Minutes"
								name="time"
								required
							/>
							<li>Enter price of the Quiz</li>
							<StyledInput
								type="number"
								placeholder="Enter price in INR"
								name="price"
								required
							/>
							<li>Enter the Quiz image URL</li>
							<StyledInput
								type="text"
								placeholder="Paste the image URL here"
								name="image"
								required
							/>
						</ol>
						<Link to={"/create/quiz/mcq"}>
							<StyledButton>Continue</StyledButton>
						</Link>
					</form>
				</div>
			</Container>
		</Flex>
	);
}

export default CreateQuizTest;
