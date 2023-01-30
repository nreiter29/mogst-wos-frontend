import { useEffect, useState } from "react";
import { RegisterForm } from "../../pages/auth/register";

export function useRegisterMutation() {
  const [refetch, setRefetch] = useState<RegisterForm>()
  const [registeredSucessfully, setRegisteredSuccesfully] = useState<boolean>()

  useEffect(() => {
    if (refetch) {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation RegisterCustomerAccount {
            registerCustomerAccount(
              input: {
                emailAddress: "${refetch?.emailAddress}"
                title: "${refetch?.title}"
                firstName: "${refetch?.firstName}"
                lastName: "${refetch?.lastName}"
                phoneNumber: "${refetch?.phoneNumber}"
                password: "${refetch?.password}"
                customFields: {
                  salutation: "${refetch?.salutation}"
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
        `
        })
      }).then(res => res.json()).then(res => {
        if (res.data.registerCustomerAccount.__typename == "Success") {
          setRegisteredSuccesfully(true)
        }
      })
    }
  }, [refetch])

  return { setRefetch, registeredSucessfully, refetch }
}