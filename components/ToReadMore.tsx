import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  StackDivider,
  Box,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

export const ToReadMore = () => {
  return (
    <Card variant="outline">
      <Box
        bg={useColorModeValue("#F4F4FD", "gray.800")}
        border={"1px"}
        borderColor="#4E46DC"
        rounded="md"
      >
        <CardBody px={10}>
          <Stack spacing="3" align="center">
            <Heading size="md">この続きを読むには</Heading>
            <Text fontSize={"xs"}>
              この記事は会員限定の記事になります。登録すると続きをお読みいただけます。
            </Text>
          </Stack>
        </CardBody>
        <CardFooter justify="center">
          <Stack divider={<StackDivider />} spacing="5">
            <Button bg="#4E46DC" color="white" px={8}>
              無料会員に登録する
            </Button>
            <Button bg="white" px={8}>
              ログイン
            </Button>
          </Stack>
        </CardFooter>
      </Box>
    </Card>
  );
};
