import { Card, CardBody, CardHeader, Container, Heading, Box } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { TbError404 } from "react-icons/tb"
import NextImage from "next/image"

export default function Custom404() {
  const [dogObject, setDogObject] = useState<{
    status: string
    message: string
  }>()
  const [dogPicture, setDogPicture] = useState<string>()

  useEffect(() => {
    const fetchDogs = async () => {
      const data = await fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).catch(err => console.log(err))
      await setDogObject(data)
    }
    fetchDogs()
  }, [])

  useEffect(() => {
    if (dogObject) {
      setDogPicture(dogObject.message)
    }
  }, [dogObject])

  return (
    <Container maxW="container.xl" h="95vh" display="flex" alignItems="center">
      <Card w="100%">
        <CardHeader>
          <Heading as="h2" fontSize="4xl" color="red.700" display="flex" alignItems="center" gap="2"><TbError404 fontSize="50px" />Page not found</Heading>
        </CardHeader>
        <CardBody>
          <Box w="350px" h="350px">
            {dogPicture && (
              <NextImage src={dogPicture} alt="dog" width={100} height={100} objectFit="cover" />
            )}
          </Box>
        </CardBody>
      </Card>
    </Container>
  )
}