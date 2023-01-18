import { ButtonGroup, Button, Text } from "@chakra-ui/react";

type pageProps = {
	pageCount: number;
	currentPage: number;
};

export const PageButton = ({ pageCount, currentPage }: pageProps) => {
	return (
		<ButtonGroup variant="outline" spacing="2" size="xs">
			<Text>Page</Text>
			{Array(pageCount)
				.fill(1)
				.map((el, i) =>
					i === currentPage - 1 ? (
						<Button colorScheme="blue" variant="solid" isActive>
							{i + 1}
						</Button>
					) : (
						<Button colorScheme="blue" variant="ghost">
							{i + 1}
						</Button>
					)
				)}
		</ButtonGroup>
	);
};
