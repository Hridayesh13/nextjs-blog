import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export const ReportCard = () => {
  return (
    <Card overflow="hidden" variant="outline">
      {/* <CardHeader>
				<Heading size="md">Heading1</Heading>
			</CardHeader> */}
      <Image
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <CardBody>
        <Stack spacing={1}>
          <Heading size="lg">Heading</Heading>
          <Text size="sm">Description</Text>
          <Text color="blue.600" fontSize="md">
            JPY 900
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" size="sm">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" size="sm">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
