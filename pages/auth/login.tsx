import { Container, Heading, Box, VStack, Card, CardHeader, CardBody, Input, Select, Flex, SimpleGrid, Text, Button, CardFooter, HStack, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../../operations/mutation/useLoginMutation"
import { useActiveCustomerQuery } from "../../operations/query/useActiveCustomerQuery"
import { CustomLink } from "../../utility/CustomLink"

export interface ILoginForm {
  emailAddress: string
  password: string
  rememberMe: boolean
}

const Register = () => {
  const { register, handleSubmit } = useForm<ILoginForm>()
  const { setRefetch, loginSuccesfully, isLoginDataFalse } = useLoginMutation()
  const { activeCustomerData, refetch } = useActiveCustomerQuery()
  const onSubmit: SubmitHandler<ILoginForm> = data => setRefetch(data)

  useEffect(() => {
    if (loginSuccesfully) {
      refetch()
    }
  }, [loginSuccesfully])

  return (
    <Container maxW="container.xl" h="95vh" display="flex" alignItems="center">
      <Card w="100%">
        <CardHeader fontSize="xx-large" fontWeight="bold">
          <Heading as="h2" fontSize="4xl">
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          {loginSuccesfully ? (
            <Text fontSize="lg">
              Hey {activeCustomerData?.data?.activeCustomer?.customFields.salutation} {activeCustomerData?.data?.activeCustomer?.title} {activeCustomerData?.data?.activeCustomer?.lastName},
              <br />
              you have <strong>successfully</strong> logged in!
            </Text>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2">
                <Box>
                  <Text>E-Mail *</Text>
                  <Input type="email" isRequired {...register("emailAddress", { required: true })} />
                </Box>
                <Box>
                  <Text>Password *</Text>
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