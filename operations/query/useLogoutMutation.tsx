import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export interface ILogoutData {
  data?: {
    logout: {
      success: boolean
    }
  }
}

export function useLogoutMutation() {
  const [logoutBoolean, setLogoutBoolean] = useState<boolean>(false)
  const toast = useToast()

  function logout() {
    setLogoutBoolean(true)
  }

  useEffect(() => {
    if (logoutBoolean) {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation Logout {
          logout {
            success
            __typename
          }
        }
        `
        })
      }).then(res => res.json()).then(res => {
        setLogoutBoolean(false)
        toast({
          title: "Successfully",
          description: "You have been successfully logged out!",
          status: "success",
          duration: 5000,
          isClosable: true
        })
      }).catch(err => {
        console.log(err)
        toast({
          title: "Failure",
          description: "An unexpected error occurred, please try again later",
          status: "error",
          duration: 5000,
          isClosable: true
        })
      })
    }
  }, [logoutBoolean])

  return logout
}