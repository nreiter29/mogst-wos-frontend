import { gql, GraphQLClient } from 'graphql-request'
import { useState } from 'react'
import type { ILoginForm } from '../../pages/auth/login'

export function useLoginMutation () {
  const [loginSuccesfully, setLoginSuccesfully] = useState<boolean>(false)
  const [isLoginDataFalse, setIsLoginDataFalse] = useState<boolean>(false)
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })

  const getData = (input: ILoginForm) => {
    graphQLClient.request(gql`
    mutation Login {
      login(
        username: "${input.emailAddress}"
        password: "${input.password}"
        rememberMe: ${input.rememberMe}
      ) {
        ... on CurrentUser {
          id
          identifier
        }
        ... on InvalidCredentialsError {
          errorCode
          message
          authenticationError
        }
        ... on NotVerifiedError {
          errorCode
          message
        }
        ... on NativeAuthStrategyError {
          errorCode
          message
        }
        __typename
      }
    }
  `).then(res => {
      if (res.login.__typename === 'InvalidCredentialsError') {
        setIsLoginDataFalse(true)
      } else if (res.login.__typename === 'CurrentUser') {
        setLoginSuccesfully(true)
      }
    })
  }

  return { getData, loginSuccesfully, isLoginDataFalse }
}
