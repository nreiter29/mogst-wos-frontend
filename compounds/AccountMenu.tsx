import { Box, Button, Circle, Heading, HStack, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import type { IActiveCustomerData } from '../operations/query/useActiveCustomerQuery'
import type { IActiveOrderCartVariants } from '../operations/query/useActiveOrderCart'
import { useLogoutMutation } from '../operations/query/useLogoutMutation'
import { CustomLink } from '../utility/CustomLink'

const AccountMenu: React.FC<{
  isLoading: boolean
  activeCustomerData?: IActiveCustomerData | undefined
  refetch: () => void
  refetchActiveOrderCartData: () => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
  loginSuccesfully: boolean
}> = ({ isLoading, activeCustomerData, refetch, refetchActiveOrderCartData, activeOrderCartData, loginSuccesfully }) => {
  const logout = useLogoutMutation()

  useEffect(() => {
    refetchActiveOrderCartData()
  }, [refetchActiveOrderCartData])

  return (
    <HStack justify="space-between" w="100%" mt="5">
      <CustomLink href="/">
        <Image
          src="/logo.png"
          h="42px"
          objectFit="contain"
          objectPosition="center"
        />
      </CustomLink>
      <HStack>
        {loginSuccesfully && activeOrderCartData?.activeOrder !== null && (
          <CustomLink href="/cart">
            <Box h="40px" w="40px">
              <IconButton
                bgColor="inherit"
                icon={<BsCart2 size="100%"/>}
                aria-label=""
                _hover={{ bgColor: 'inherit' }}
                _active={{ bgColor: 'inherit' }}
              />
              <Circle
                bgColor="primaryButtonColor.500"
                color="secondaryText.500"
                size={6}
                fontSize={activeOrderCartData?.activeOrder.totalQuantity && activeOrderCartData.activeOrder.totalQuantity >= 10 ? 'sm' : 'xl'}
                pos="relative"
                top="-45px"
                left="20px"
              >
                {activeOrderCartData?.activeOrder.totalQuantity}
              </Circle>
            </Box>
          </CustomLink>
        )}
        <Popover>
          <PopoverTrigger>
            <IconButton
              isDisabled={isLoading}
              icon={<RxAvatar size="42px"/>}
              size="fit-content"
              aria-label=""
              backgroundColor="inherit"
              _hover={{ bgColor: 'inherit' }}
              _active={{ bgColor: 'inherit' }}
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent bgColor="primaryBackground.500">
              <PopoverArrow/>
              <PopoverHeader>
                <Heading as="h3" fontSize="lg">Account</Heading>
              </PopoverHeader>
              <PopoverCloseButton/>
              <PopoverBody
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                {activeCustomerData?.activeCustomer
                  ? (
                    <VStack>
                      <Text fontSize="lg">
                        Hey {activeCustomerData.activeCustomer.customFields.salutation} {activeCustomerData.activeCustomer.title} {activeCustomerData.activeCustomer.lastName}, you are logged in!
                      </Text>
                      <Button
                        colorScheme="red"
                        onClick={async () => { await logout(); refetch(); refetchActiveOrderCartData() }}
                      >Logout
                      </Button>
                    </VStack>
                    )
                  : (
                    <>
                      <CustomLink
                        href="/auth/login"
                        w="full"
                        _hover={{ textDecor: 'none' }}
                      >
                        <Button
                          bgColor="primaryButtonColor.500"
                          color="secondaryText.500"
                          _hover={{ bgColor: 'primaryButtonColor.300' }}
                          w="full"
                          rounded="none"
                        >Login
                        </Button>
                      </CustomLink>
                      <Heading as="h4" fontSize="md">
                        or
                      </Heading>
                      <CustomLink
                        href="/auth/register"
                        w="full"
                        _hover={{ textDecor: 'none' }}
                      >
                        <Button
                          bgColor="secondaryButton.500"
                          w="full"
                          rounded="none"
                          color="secondaryText.500"
                          _hover={{ bgColor: 'secondaryButton.300' }}
                        >Registration
                        </Button>
                      </CustomLink>
                    </>
                    )}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </HStack>
    </HStack>
  )
}

export default AccountMenu
