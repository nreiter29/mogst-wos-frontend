import { Container, Heading, Box, VStack, Card, CardHeader, CardBody, Input, Select, Flex, SimpleGrid, Text, Button, CardFooter, HStack, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../../operations/mutation/useLoginMutation"
import { CustomLink } from "../../utility/CustomLink"

export type LoginForm = {
  emailAddress: string
  password: string
  rememberMe: boolean
}

const Register = () => {
  const { register, handleSubmit } = useForm<LoginForm>()
  const onSubmit: SubmitHandler<LoginForm> = data => setRefetch(data)
  const { setRefetch, loginSuccesfully, isLoginDataFalse } = useLoginMutation()

  return (
    <Container maxW="container.xl" h="100vh" display="flex" alignItems="center">
      <Card w="100%" >
        <CardHeader fontSize="xx-large" fontWeight="bold">
          Login
        </CardHeader>
        <CardBody>
          {loginSuccesfully ? (
            <Text fontSize="lg">
              You have <strong>successfully</strong> logged in!
            </Text>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2">
                <Box>
                  E-Mail *
                  <Input type="email" isRequired {...register("emailAddress", { required: true })} />
                </Box>
                <Box>
                  Password *
                  <Input type="password" isRequired {...register("password", { required: true })} />
                </Box>
              </SimpleGrid>
              <HStack align="center" my="2">
                <Text>Remember me</Text>
                <Checkbox {...register("rememberMe")} />
              </HStack>
              <Box>
                <Text color="red">{isLoginDataFalse && "E-Mail or password is wrong!"}</Text>
                <Button type="submit" w="50%" colorScheme="purple">Login</Button>
              </Box>
            </form>
          )}
        </CardBody>
        <CardFooter>
          <HStack align="center">
            <CustomLink href="/" _hover={{ textDecor: "none" }}>
              <Button colorScheme="red" as="div">Back to home</Button>
            </CustomLink>
            {!loginSuccesfully && (
              <>
                <Text>or</Text>
                <CustomLink href="/auth/register" _hover={{ textDecor: "none" }}>
                  <Button colorScheme="gray" as="div">Go to register</Button>
                </CustomLink>
              </>
            )}
          </HStack>
        </CardFooter>
      </Card>
    </Container >
  )
}

export default Register