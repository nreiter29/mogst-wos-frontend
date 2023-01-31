import { Card, CardBody, CardFooter, CardHeader, Container, Heading, Text } from '@chakra-ui/react'
import { BiErrorAlt } from 'react-icons/bi'

const FetchError = () => {
  return (
    <Container h="95vh" maxW="container.xl" display="flex" alignItems="center">
      <Card w="100%">
        <CardHeader>
          <Heading as="h2" fontSize="4xl" color="red.700" display="flex" alignItems="center" gap="2"><BiErrorAlt/>Oh, oh, an unexpected error has occurred</Heading>
        </CardHeader>
        <CardBody>
          <Text color="red.500">Failed to fetch</Text>
        </CardBody>
        <CardFooter>
          <Text>Please try again later.</Text>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default FetchError
