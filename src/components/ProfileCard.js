import { StyledProfileCard, NameImage } from "./styled/ProfileCard.styled";
import { useSelector, useDispatch } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import { useEffect } from "react";
import { getUser, reset } from "../features/user/userSlice";

export const ProfileCard = () => {
	const dispatch = useDispatch();
	const { email } = JSON.parse(localStorage.getItem("user"));
	const { user, isLoading, isError, message } = useSelector(
		(state) => state.user
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getUser({ email }));

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message, email]);

	if (isLoading) {
		<MoonLoader loading={isLoading} size={30} color="#343E3D" />;
	}

	return (
		<StyledProfileCard>
			{isLoading || !user ? (
				<h2>Please wait..</h2>
			) : (
				<>
					<NameImage>
						<img src={user && user.image} alt="user pic" />
						<h2>{user.displayName}</h2>
						<p>{user.email}</p>
					</NameImage>
					<div>
						<h4>About:</h4>
						<p>{user.about}</p>
					</div>
					<div>
						<h4>Skills:</h4>
						<p>{user.skills}</p>
					</div>
					<div>
						<h4>Number of mock tests given:</h4>
						<p>{user.mock_test_given ? user.mock_test_given.length : []}</p>
					</div>
					<div>
						<h4>Number of Quizzes given:</h4>
						<p>{user.quiz_given ? user.quiz_given.length : []}</p>
					</div>
				</>
			)}
		</StyledProfileCard>
	);
};
