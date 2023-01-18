import { ButtonGroup, Button, Box } from "@chakra-ui/react";

export const FilterArray = () => {
	return (
		<ButtonGroup size="sm">
			<Box
				mt="1"
				fontWeight="semibold"
				as="h4"
				lineHeight="tight"
				noOfLines={1}
			>
				Filter:
			</Box>
			<Button isActive={true}>All</Button>
			{Array(5)
				.fill(1)
				.map((el, i) => (
					<Button isActive={false}>Filter {i + 1}</Button>
				))}
		</ButtonGroup>
	);
};
