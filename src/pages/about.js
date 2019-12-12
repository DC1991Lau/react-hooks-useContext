import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h2>About</h2>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<div>
				{!user ? (
					<button
						onClick={async () => {
							const user = await login();
							setUser(user);
						}}>
						Login
					</button>
				) : (
					<button
						onClick={() => {
							setUser(null);
						}}>
						Logout
					</button>
				)}
			</div>
		</div>
	);
}
