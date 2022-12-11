import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
	const { seconds, minutes, hours, isRunning } = useTimer({
		expiryTimestamp,
	});

	return (
		<div style={{ textAlign: "center" }}>
			<h1>react-timer-hook </h1>
			<p>Timer Demo</p>
			<div style={{ fontSize: "2rem" }}>
				<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
			</div>
			<p>{isRunning ? "Running" : "Not running"}</p>
		</div>
	);
}
