import { Card, CardBody, CardHeader, Container, Heading, Box, Stack, Skeleton, CardFooter, Button } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { TbError404 } from "react-icons/tb"
import NextImage from "next/legacy/image";
import { CustomLink } from "../utility/CustomLink";

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
          <Stack>
            {dogPicture == undefined && <Skeleton mx="auto" w={500} h={500} />}
            {dogPicture && (
              <NextImage src={dogPicture} alt="dog" width={500} height={500} layout="intrinsic" objectFit="contain" />
            )}
          </Stack>
        </CardBody>
        <CardFooter>
          <CustomLink href="/" _hover={{ textDecor: "none" }}>
            <Button bgColor="backHome.500" _hover={{ bgColor: "backHome.600" }} color="secondaryText.500" as="div">Back to home</Button>
          </CustomLink>
        </CardFooter>
      </Card>
    </Container>
  )
}