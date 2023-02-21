import { Box, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Container, Heading, HStack, Input, SimpleGrid, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { IActiveCustomerData } from '../../operations/query/useActiveCustomerQuery'
import { CustomLink } from '../../utility/CustomLink'

export interface ILoginForm {
  emailAddress: string
  password: string
  rememberMe: boolean
}

const Register: React.FC<{
  activeCustomerData: IActiveCustomerData | undefined
  refetch: () => void
  refetchActiveOrderCartData: () => void
  getData: (input: ILoginForm) => void
  loginSuccesfully: boolean
  isLoginDataFalse: boolean
}> = ({ activeCustomerData, refetch, refetchActiveOrderCartData, getData, loginSuccesfully, isLoginDataFalse }) => {
  const { register, handleSubmit } = useForm<ILoginForm>()
  const onSubmit: SubmitHandler<ILoginForm> = data => getData(data)

  useEffect(() => {
    if (loginSuccesfully) {
      refetch()
      refetchActiveOrderCartData()
    }
  }, [loginSuccesfully])

  return (
    <Container maxW="container.xl" h="95vh" display="flex" alignItems="center">
      <Card w="100%" bgColor="primaryBackground.500">
        <CardHeader>
          <Heading as="h2" fontSize="4xl">
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          {loginSuccesfully
            ? (
              <Text fontSize="lg">
                Hey {activeCustomerData?.activeCustomer?.customFields.salutation} {activeCustomerData?.activeCustomer?.title} {activeCustomerData?.activeCustomer?.lastName},
                <br/>
                you have <strong>successfully</strong> logged in!
              </Text>
              )
            : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2">
                  <Box>
                    <Text>E-Mail *</Text>
                    <Input type="email" isRequired {...register('emailAddress', { required: true })}/>
                  </Box>
                  <Box>
                    <Text>Password *</Text>
                    <Input type="password" isRequired {...register('password', { required: true })}/>
                  </Box>
                </SimpleGrid>
                <HStack align="center" my="2">
                  <Text>Remember me</Text>
                  <Checkbox {...register('rememberMe')}/>
                </HStack>
                <Box>
                  <Text color="red">{isLoginDataFalse && 'E-Mail or password is wrong!'}</Text>
                  <Button
                    type="submit"
                    w="50%"
                    bgColor="primaryButtonColor.500"
                    color="secondaryText.500"
                    _hover={{ bgColor: 'primaryButtonColor.300' }}
                  >Login
                  </Button>
                </Box>
              </form>
              )}
        </CardBody>
        <CardFooter>
          <HStack align="center">
            <CustomLink href="/" _hover={{ textDecor: 'none' }}>
              <Button bgColor="backHome.500" _hover={{ bgColor: 'backHome.600' }} color="secondaryText.500" as="div">Back to home</Button>
            </CustomLink>
            {!loginSuccesfully && (
              <>
                <Text>or</Text>
                <CustomLink href="/auth/register" _hover={{ textDecor: 'none' }}>
                  <Button bgColor="secondaryButton.500" color="secondaryText.500" _hover={{ bgColor: 'secondaryButton.300' }} as="div">Go to register</Button>
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
