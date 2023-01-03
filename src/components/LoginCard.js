import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./styled/Button.styled";
import { StyledLoginCard } from "./styled/LoginCard.styled";
import { login, reset, demoLogin } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginCard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isSuccess, user, isLoading } = useSelector((state) => state.auth);

	function handleCallbackResponse(response) {
		dispatch(login(response.credential));
	}

	function demoLoginHandler() {
		dispatch(demoLogin());
	}

	useEffect(() => {
		if (isSuccess || user) {
			navigate("/dashboard");
		}

		/*global google */
		google.accounts.id.initialize({
			client_id:
				"822191944108-2l224ffp9j1a5v3mr45h78pvp6aq0b38.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			size: "large",
		});

		return () => {
			dispatch(reset());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, user, isSuccess]);

	// if (isLoading) {
	// 	return (
	// 		<div className="loading">
	// 			<h1>Loading...</h1>
	// 		</div>
	// 	);
	// }

	return (
		<>
			{isLoading ? (
				<div className="loading">
					<h2>Please Wait</h2>
				</div>
			) : (
				<StyledLoginCard>
					<h1> Let's sign you in!</h1>
					<p>
						If you don't have an account, a new account will be created based on
						your Google account info
					</p>
					<div id="signInDiv"></div>
					<StyledButton
						onClick={demoLoginHandler}
						fontclr="#343E3D"
						color="#fff"
						wd="250px"
						login
					>
						Try as Demo Student
					</StyledButton>
				</StyledLoginCard>
			)}
		</>
	);
};
