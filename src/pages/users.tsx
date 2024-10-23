import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "../api/axios";

interface User {
	map: any;
	length: any;
	username: string;
}

const Users = () => {
	const [users, setUsers] = useState<User>();
	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();
		const getUsers = async () => {
			try {
				const response = await axios.get("/users", {
					signal: controller.signal,
				});
				console.log(response.data);
				isMounted && setUsers(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getUsers();
		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);
	return (
		<>
			<Text>Users List</Text>
			{users?.length ? (
				<ul>
					{users.map((user: User, i: any) => (
						<li key={i}>{user.username}</li>
					))}
				</ul>
			) : (
				<>
					<p>No user(s)</p>
				</>
			)}
		</>
	);
};

export default Users;
