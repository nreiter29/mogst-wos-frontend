import { Box, HStack, Popover, PopoverTrigger, IconButton, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, Button } from "@chakra-ui/react"
import { RxAvatar } from "react-icons/rx"
import { CustomLink } from "../utility/CustomLink"

const AccountMenu: React.FC<{}> = () => {
  return (
    <HStack justify="space-between" w="100%" mt="5">
      <Box w="1px" h="1px"></Box>
      <Box>
        <Popover>
          <PopoverTrigger>
            <IconButton icon={<RxAvatar size="42px" />} size="fit-content" aria-label={""} backgroundColor="inherit" _hover={{ bgColor: "inherit" }} _active={{ bgColor: "inherit" }} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Account</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody display="flex" flexDir="column" justifyContent="center" alignItems="center">
                <CustomLink href="/auth/login" w="full" _hover={{ textDecor: "none" }}>
                  <Button colorScheme='purple' w="full" rounded="none">Login</Button>
                </CustomLink>
                or
                <CustomLink href="/auth/register" w="full" _hover={{ textDecor: "none" }}>
                  <Button colorScheme='gray' w="full" rounded="none">Registration</Button>
                </CustomLink>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </HStack>
  )
}

export default AccountMenu