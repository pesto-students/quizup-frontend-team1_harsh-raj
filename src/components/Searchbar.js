import { useState } from "react";
import { StyledSearchbar } from "./styled/Searchbar.styled";

function Searchbar() {
	const [text, setText] = useState("");

	return (
		<StyledSearchbar
			type="text"
			name="search"
			onChange={(e) => setText(e.target.value)}
			value={text}
			placeholder="Search for mock tests and quizzes"
		/>
	);
}

export default Searchbar;
