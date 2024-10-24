import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import axios from "../api/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
const LOGIN_URL = "/auth/login";
import { useLocation } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const { setAuth } = useAuth();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await axios.post(LOGIN_URL, {
				username,
				password,
				expiresInMins: 30,
			});
			console.log(response.data);
			const token = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ username, password, token, roles });
			navigate(from, { replace: true });
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<Box
			p={8}
			width="30%"
			border="1px solid black"
			borderRadius="10px"
			bg="skyblue"
			margin="auto"
			mt="30vh"
		>
			<form action="">
				<FormControl isRequired mb={4}>
					<FormLabel fontWeight="bold">Username</FormLabel>
					<Input
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						variant="filled"
						placeholder="First name"
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel fontWeight="bold">Password</FormLabel>
					<InputGroup size="md">
						<Input
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							variant="filled"
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Enter password"
						/>
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Button
						colorScheme="blue"
						mt={6}
						type="submit"
						onClick={() => handleSubmit}
					>
						Submit
					</Button>
				</FormControl>
			</form>
		</Box>
	);
}
