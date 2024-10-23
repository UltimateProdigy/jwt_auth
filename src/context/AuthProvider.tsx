import { useState, createContext, ReactNode, useContext } from "react";

interface AuthContextType {
	auth: any;
	setAuth: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [auth, setAuth] = useState<any>({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("Error");
	}
	return context;
};
