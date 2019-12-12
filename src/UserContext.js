import { createContext, useState } from "react";

export const UserContext = createContext(null);

// export default function UserProvider({ children }) {
// 	const [utilizador, setUtilizador] = useState(null);

// 	function addToUserList(utilizador) {
// 		setUtilizador(u => [...u, utilizador]);
// 	}

// 	return (
// 		<UserContext.Provider value={{ utilizador, addToUserList }}>
// 			{children}
// 		</UserContext.Provider>
// 	);
// }
