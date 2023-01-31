import { useToast } from '@chakra-ui/react'
import { gql, GraphQLClient } from 'graphql-request'
import { useEffect, useState } from 'react'
import type { RegisterForm } from '../../pages/auth/register'

export function useRegisterMutation () {
  const [refetch, setRefetch] = useState<RegisterForm>()
  const [registeredSucessfully, setRegisteredSuccesfully] = useState<boolean>()
  const toast = useToast()

  useEffect(() => {
    const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })

    if (typeof refetch !== 'undefined') {
      graphQLClient.request(gql`
      mutation RegisterCustomerAccount {
        registerCustomerAccount(
          input: {
            emailAddress: "${refetch.emailAddress}"
            title: "${refetch.title}"
            firstName: "${refetch.firstName}"
            lastName: "${refetch.lastName}"
            phoneNumber: "${refetch.phoneNumber}"
            password: "${refetch.password}"
            customFields: {
              salutation: "${refetch.salutation}"
            }
          }
        ) {
          __typename
          ... on Success {
            success
          }
          ... on MissingPasswordError {
            errorCode
            message
          }
          ... on PasswordValidationError {
            errorCode
            message
          }
          ... on NativeAuthStrategyError {
            errorCode
            message
          }
        }
      }
    `).then(res => {
        if (res.registerCustomerAccount.__typename === 'Success') {
          setRegisteredSuccesfully(true)
        }
      }).catch(err => {
        toast({
          title: 'Failure',
          description: 'An unexpected error occurred, please try again later',
          status: 'error',
          duration: 5000,
          isClosable: true,
        }); console.log(err)
      })
    }
  }, [refetch, toast])

  return { setRefetch, registeredSucessfully, refetch }
}
