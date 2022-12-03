import { StyledButton } from "./styled/Button.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledLoginCard } from "./styled/LoginCard.styled";

export const LoginCard = () => {
	return (
		<>
			<StyledLoginCard>
				<h1> Let's sign you in!</h1>
				<p>
					If you don't have an account, a new account will be created based on
					your Google account info
				</p>
				<h2>Continue as</h2>
				<Flex radioBtn>
					<div>
						<input type="radio" name="user" value="student" defaultChecked />
						<label>Student</label>
					</div>
					<div>
						<input type="radio" name="user" value="admin" />
						<label>Admin</label>
					</div>
				</Flex>
				<StyledButton fontclr="#343E3D" color="#fff" width="250px" login>
					<img src="/images/google.svg" alt="google logo" />
					Sign in with Google
				</StyledButton>
				<StyledButton fontclr="#343E3D" color="#fff" width="250px" login>
					Try as Demo Student
				</StyledButton>
			</StyledLoginCard>
		</>
	);
};
