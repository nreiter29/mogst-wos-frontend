import { Container, Text, VStack, Box } from "@chakra-ui/react"
import dayjs from "dayjs"

const Footer = () => {
  return (
    <Box pos="fixed" bottom="0" w="full">
      <Container maxW="container.xl" mb="5">
        <VStack justify="center">
          <Text color="gray" fontFamily="SFProRegular">© ALPIN11 New Media GmbH, {dayjs().year()}. Alle Rechte vorbehalten.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer