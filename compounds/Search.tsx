import { Box, HStack, Image, Skeleton, Stack, StackDivider, Text, useOutsideClick, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "../modules/SearchBar";
import { useDebounce } from "../helper/useDebounce";
import { useSearchQuery } from "../operations/query/useSearchQuery";
import { CustomLink } from "../utility/CustomLink";

const Search: React.FC<{
  setCloseSearchResults: (v: boolean) => void,
  closeSearchResults: boolean,
}> = ({ setCloseSearchResults, closeSearchResults, }) => {

  const [searchInput, setSearchInput] = useState('')
  const debouncedSearchInput = useDebounce(searchInput, 500)
  const { data, isLoading, refetch } = useSearchQuery(searchInput)


  useEffect(() => {
    if (debouncedSearchInput.length > 2 && data?.data.search.items.length != 0) {
      refetch()
    }
  }, [debouncedSearchInput.length])

  const ref = useRef(null)
  useOutsideClick({
    ref: ref,
    handler: () => setCloseSearchResults(true),
  })


  return (
    <>
      <SearchBar
        isLoading={isLoading ? false : isLoading}
        borderBottomRadius={(!closeSearchResults) ? 0 : 20}
        w="inherit"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        searchOpen={!closeSearchResults}
        isInvalid={data?.data.search?.items?.length == 0}
        errorBorderColor="red"
        onClick={() => setCloseSearchResults(false)}
      />
      {!closeSearchResults && (
        <Stack
          spacing={0}
          border="1px"
          borderTop="none"
          borderColor="gray.300"
          bg="white"
          position="absolute"
          w="inherit"
          divider={<StackDivider borderColor="gray.300" />}
          maxH="500px"
          overflowY="auto"
          ref={ref}
          zIndex={1}
        >
          {data?.data.search?.items.map((item, index) => {
            return (
              <Skeleton isLoaded={!isLoading} key={"Searchbar" + item.sku + index}>
                <Box
                  color="secondaryText.900"
                  _hover={{ bgColor: "gray.200" }}
                  p="10px"
                  transition="0.25s"
                >
                  <CustomLink href={`/product/${item.slug}?sku=${item.sku}`} onClick={() => setSearchInput('')} _hover={{ textDecor: "none" }}>
                    <HStack spacing="2">
                      <Image
                        h="75px"
                        w="75px"
                        objectFit="cover"
                        objectPosition="center"
                        src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                        alt={item.productVariantName ?? "Standard Picture"} />
                      <VStack spacing="0" align="flex-start">
                        <Text fontWeight="bold" _hover={{ color: 'accent.500' }} transition="0.25s">
                          {item.productVariantName}
                        </Text>
                        <Text color="gray">
                          Artikelnummer: {item.sku}
                        </Text>
                      </VStack>
                    </HStack>
                  </CustomLink>
                </Box>
              </Skeleton>
            )
          })}
        </Stack>
      )
      }
      {
        (!closeSearchResults && data?.data.search?.items.length === 0) && (
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.300"
            bg="white"
            position="absolute"
            w="inherit"
            padding="15px"
          >
            <Text fontWeight="bold">
              No results found
            </Text>
          </Box>
        )
      }
    </>
  )
}

export default Search