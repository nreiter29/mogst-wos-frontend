import { useState } from "react";
import { ILoginForm } from "../../pages/auth/login";

export function useLoginMutation() {
  const [loginSuccesfully, setLoginSuccesfully] = useState<boolean>(false)
  const [isLoginDataFalse, setIsLoginDataFalse] = useState<boolean>(false)

  const getData = (input: ILoginForm) => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation Login {
            login(
              username: "${input?.emailAddress}"
              password: "${input?.password}"
              rememberMe: ${input?.rememberMe}
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
        `
      })
    }).then(res => res.json()).then(res => {
      if (res.data.login.__typename == "InvalidCredentialsError") {
        setIsLoginDataFalse(true)
      } else if (res.data.login.__typename == "CurrentUser") {
        setLoginSuccesfully(true)
      }
    })
  }


  return { getData, loginSuccesfully, isLoginDataFalse }
}