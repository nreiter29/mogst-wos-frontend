import { Button, Card, CardBody, CardFooter, CardHeader, Container, Heading, Skeleton, Stack } from '@chakra-ui/react'
import NextImage from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { TbError404 } from 'react-icons/tb'
import { CustomLink } from '../utility/CustomLink'

const Custom404 = () => {
  const [dogObject, setDogObject] = useState<{
    status: string
    message: string
  }>()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => { setDogObject(res) })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <Container
      maxW="container.xl"
      h="95vh"
      display="flex"
      alignItems="center"
    >
      <Card w="100%" bgColor="primaryBackground.500">
        <CardHeader>
          <Heading
            as="h2"
            fontSize="4xl"
            color="red.700"
            display="flex"
            alignItems="center"
            gap="2"
          ><TbError404 fontSize="50px"/>Page not found
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            {dogObject === undefined && (
              <Skeleton
                mx="auto"
                w={500}
                h={500}
              />
            )}
            {dogObject?.message && (
              <NextImage
                src={dogObject.message}
                alt="dog"
                width={500}
                height={500}
                layout="intrinsic"
                objectFit="contain"
              />
            )}
          </Stack>
        </CardBody>
        <CardFooter>
          <CustomLink href="/" _hover={{ textDecor: 'none' }}>
            <Button
              bgColor="backHome.500"
              _hover={{ bgColor: 'backHome.600' }}
              color="secondaryText.500"
              as="div"
            >Back to home
            </Button>
          </CustomLink>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Custom404
