import { Image, Text } from "@chakra-ui/react";

export const Missing = () => {
	return (
		<div>
			<Image w="800px" m="auto" src="/6325254.jpg" alt="" />
			<Text
				fontWeight="bold"
				fontSize="30px"
				display="flex"
				justifyContent="center"
			>
				PAGE NOT FOUND
			</Text>
		</div>
	);
};
