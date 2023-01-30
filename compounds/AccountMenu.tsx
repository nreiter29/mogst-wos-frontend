import { Box, Button, Heading, HStack, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text, VStack, Image } from "@chakra-ui/react"
import { RxAvatar } from "react-icons/rx"
import { useActiveCustomerQuery } from "../operations/query/useActiveCustomerQuery"
import { useLogoutMutation } from "../operations/query/useLogoutMutation"
import { CustomLink } from "../utility/CustomLink"

const AccountMenu: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { activeCustomerData, refetch } = useActiveCustomerQuery()
  const logout = useLogoutMutation()

  return (
    <HStack justify="space-between" w="100%" mt="5">
      <CustomLink href="/">
        <Image src="/logo.png" h="42px" objectFit="contain" objectPosition="center" />
      </CustomLink>
      <Box>
        <Popover>
          <PopoverTrigger>
            <IconButton isDisabled={isLoading} icon={<RxAvatar size="42px" />} size="fit-content" aria-label="" backgroundColor="inherit" _hover={{ bgColor: "inherit" }} _active={{ bgColor: "inherit" }} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent bgColor="primaryBackground.500">
              <PopoverArrow />
              <PopoverHeader><Heading as="h3" fontSize="lg">Account</Heading></PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody display="flex" flexDir="column" justifyContent="center" alignItems="center">
                {activeCustomerData?.data?.activeCustomer ? (
                  <VStack>
                    <Text fontSize="lg">
                      Hey {activeCustomerData?.data?.activeCustomer?.customFields.salutation} {activeCustomerData?.data?.activeCustomer?.title} {activeCustomerData?.data?.activeCustomer?.lastName}, you are logged in!
                    </Text>
                    <Button colorScheme="red" onClick={async () => { await logout(); refetch() }}>Logout</Button>
                  </VStack>
                ) : (
                  <>
                    <CustomLink href="/auth/login" w="full" _hover={{ textDecor: "none" }}>
                      <Button bgColor="primaryButtonColor.500" color="secondaryText.500" _hover={{ bgColor: "primaryButtonColor.300" }} w="full" rounded="none">Login</Button>
                    </CustomLink>
                    <Heading as="h4" fontSize="md">
                      or
                    </Heading>
                    <CustomLink href="/auth/register" w="full" _hover={{ textDecor: "none" }}>
                      <Button bgColor="secondaryButton.500" w="full" rounded="none" color="secondaryText.500" _hover={{ bgColor: "secondaryButton.300" }}>Registration</Button>
                    </CustomLink>
                  </>
                )}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </HStack >
  )
}

export default AccountMenu