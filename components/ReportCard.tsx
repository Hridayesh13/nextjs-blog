import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

export const ReportCard = () => {
    return <Card maxW='xs' size='sm'>
        <CardHeader>
            <Heading size='md'>Heading1</Heading>
        </CardHeader>
        <CardBody>
            <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='sm'>Heading2</Heading>
                <Text size='sm'>
                    Description
                </Text>
                <Text color='blue.600' fontSize='md'>
                    JPY900
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' size='sm'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue' size='sm'>
                    Add to cart
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
}