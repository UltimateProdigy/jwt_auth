import React from "react";
import { useAuth } from "../context/AuthProvider";

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	return <div>useRefreshToken</div>;
};

export default useRefreshToken;
