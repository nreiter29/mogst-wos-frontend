import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Heading, HStack, Input, Select, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRegisterMutation } from "../../operations/mutation/useRegisterMutation"
import { CustomLink } from "../../utility/CustomLink"

export type RegisterForm = {
  emailAddress: string
  title: string | undefined
  firstName: string
  lastName: string
  phoneNumber: string
  password: string
  salutation: string
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterForm>()
  const onSubmit: SubmitHandler<RegisterForm> = data => setRefetch(data)
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false)

  const { setRefetch, registeredSucessfully, refetch } = useRegisterMutation()

  useEffect(() => {
    if (password === repeatPassword) {
      setPasswordMatch(true)
    } else setPasswordMatch(false)
  }, [password, repeatPassword])

  return (
    <Container maxW="container.xl" h="95vh" display="flex" alignItems="center">
      <Card w="100%">
        <CardHeader>
          <Heading as="h2" fontSize="4xl">
            Registration
          </Heading>
        </CardHeader>
        <CardBody>
          {registeredSucessfully ? (
            <Text fontSize="lg">
              Hey {refetch?.salutation} {refetch?.title} {refetch?.lastName},
              <br />
              you have <strong>successfully</strong> registered!
            </Text>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2">
                <Box>
                  <Text>
                    Salutation *
                  </Text>
                  <Select placeholder="Please choose an salutation" {...register("salutation", { required: true })} isRequired>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </Select>
                </Box>
                <Box>
                  <Text>
                    Title
                  </Text>
                  <Input type="text" {...register("title")} />
                </Box>
                <Box>
                  <Text>
                    First name *
                  </Text>
                  <Input type="text" {...register("firstName", { required: true })} isRequired />
                </Box>
                <Box>
                  <Text>
                    Last name *
                  </Text>
                  <Input type="text" {...register("lastName", { required: true })} isRequired />
                </Box>
                <Box>
                  <Text>
                    E-Mail *
                  </Text>
                  <Input type="email" {...register("emailAddress", { required: true })} isRequired />
                </Box>
                <Box>
                  <Text>
                    Mobile number
                  </Text>
                  <Input type="tel" {...register("phoneNumber")} />
                </Box>
                <Box>
                  <Text>
                    Password *
                  </Text>
                  <Input type="password" isRequired  {...register("password", { required: true })} onChange={e => setPassword(e.target.value)} />
                </Box>
                <Box>
                  <Text>
                    Repeat Password *
                  </Text>
                  <Input type="password" isRequired onChange={e => setRepeatPassword(e.target.value)} />
                </Box>
                <Box>
                  <Text color="red">{!passwordMatch && "Passwords doesn't match"}</Text>
                  <Button type="submit" disabled={!passwordMatch} w="full" colorScheme="purple">Register</Button>
                </Box>
              </SimpleGrid>
            </form>
          )}
        </CardBody>
        <CardFooter>
          {registeredSucessfully ? (
            <HStack align="center" >
              <CustomLink href="/auth/login" _hover={{ textDecor: "none" }}>
                <Button colorScheme="purple" as="div">Go to login</Button>
              </CustomLink>
              <Text>or</Text>
              <CustomLink href="/" _hover={{ textDecor: "none" }}>
                <Button colorScheme="red" as="div">Back to home</Button>
              </CustomLink>
            </HStack>
          ) : (
            <CustomLink href="/" _hover={{ textDecor: "none" }}>
              <Button colorScheme="red" as="div">Back to home</Button>
            </CustomLink>
          )}
        </CardFooter>
      </Card>
    </Container >
  )
}

export default Register