import { CheckIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  Spacer,
  Flex,
  HStack,
  StackDivider,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export const PriceCard = () => {
  return (
    <Card variant="outline">
      <Box
        bg={useColorModeValue("#F4F4FD", "gray.800")}
        border={"1px"}
        borderColor="#4E46DC"
        rounded="md"
      >
        <CardBody px={10}>
          <Stack divider={<StackDivider />} spacing="5">
            <Flex>
              <Text as="b">定期購読</Text>
              <Spacer />
              <Text as="b" color="#4E46DC">
                1,280円
              </Text>
            </Flex>
            <Stack spacing="5" align="center">
              <HStack spacing="18px">
                <CheckIcon />
                <Text fontSize={"xs"}>
                  有料訴求テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Text>
              </HStack>
              <HStack spacing="18px">
                <CheckIcon />
                <Text fontSize={"xs"}>
                  有料訴求テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Text>
              </HStack>
              <HStack spacing="18px">
                <CheckIcon />
                <Text fontSize={"xs"}>
                  有料訴求テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Text>
              </HStack>
            </Stack>
          </Stack>
        </CardBody>
        <CardFooter justify="center">
          <Button bg="#4E46DC" color={"white"} px={8}>
            有料会員になって続きを読む
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
};
