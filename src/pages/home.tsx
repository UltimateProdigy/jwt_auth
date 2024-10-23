import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
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
			<Text fontWeight="bold" mb={4}>
				Home
			</Text>
			<Text
				onClick={() => navigate("/user")}
				cursor="pointer"
				textDecoration="underline"
				mb={4}
			>
				Go To User Page
			</Text>
			<Text
				onClick={() => navigate("/admin")}
				cursor="pointer"
				textDecoration="underline"
				mb={4}
			>
				Go To Admin Page
			</Text>
			<Text
				onClick={() => navigate("/editor")}
				cursor="pointer"
				textDecoration="underline"
				mb={4}
			>
				Go To Editor Page
			</Text>
			<Text
				onClick={() => navigate("/lounge")}
				cursor="pointer"
				textDecoration="underline"
				mb={4}
			>
				Go To Lounge Page
			</Text>
			<Button onClick={() => navigate("/login")}>Sign Out</Button>
		</Box>
	);
}
