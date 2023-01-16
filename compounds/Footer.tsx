import { Container, Text, VStack, Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box pos="fixed" bottom="0" w="full">
      <Container maxW="container.xl" mb="5">
        <VStack justify="center">
          <Text color="gray" fontFamily="SFProRegular">© by Noah Reiter | ALPIN11 New Media GmbH 2023</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer