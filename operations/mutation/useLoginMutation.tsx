import { useEffect, useState } from "react";
import { LoginForm } from "../../pages/auth/login";

export function useLoginMutation() {
  const [refetch, setRefetch] = useState<LoginForm>()
  const [loginSuccesfully, setLoginSuccesfully] = useState<boolean>(false)
  const [isLoginDataFalse, setIsLoginDataFalse] = useState<boolean>(false)

  useEffect(() => {
    if (refetch) {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation Login {
            login(
              username: "${refetch.emailAddress}"
              password: "${refetch.password}"
              rememberMe: ${refetch.rememberMe}
            ) {
              ... on CurrentUser {
                id
                identifier
                __typename
              }
              ... on InvalidCredentialsError {
                errorCode
                message
                authenticationError
                __typename
              }
              ... on NotVerifiedError {
                errorCode
                message
                __typename
              }
              ... on NativeAuthStrategyError {
                errorCode
                message
                __typename
              }
            }
          }        
        `
        })
      }).then(res => res.json()).then(res => {
        if (res.data.login.__typename == "InvalidCredentialsError") {
          setIsLoginDataFalse(true)
        } else if (!isLoginDataFalse && res.data.login.__typename == "CurrentUser") {
          setLoginSuccesfully(true)
        }
      })
    }
  }, [refetch])

  return { setRefetch, loginSuccesfully, isLoginDataFalse }
}