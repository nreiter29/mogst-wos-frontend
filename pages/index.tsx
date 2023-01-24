import { Box, Container, Heading, HStack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Filter from "../compounds/Filter";
import Pagination from "../compounds/Pagination";
import ProductItem from "../compounds/ProductItem";
import { formatFacetValues } from "../helper/formatFacetValues";
import { IVariantsData } from "../operations/query/useFetchVariants";

const Home: React.FC<{
  closeSearchResults: boolean,
  variants: IVariantsData | undefined,
  areVariantsLoading: boolean,
  setFacetNumber: (v: number[] | null) => void,
  pageNumber: number,
  setPageNumber: (num: number) => void,
}> = ({ closeSearchResults, variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber }) => {

  return (
    <Container maxW="container.xl">
      <HStack align="start" justify="space-between" w="full">
        <Filter setFacetNumber={setFacetNumber} facetValues={formatFacetValues(variants?.search.facetValues ?? [])} isLoading={areVariantsLoading} />
        <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} pl={{ base: "4", sm: "6", lg: "8" }}>
          <Heading as="h2" my="8">Variants</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gridGap='20px' mb="35px">
            {areVariantsLoading && [...Array(6)].map((e, i) => <Skeleton height='428px' w="277px" boxShadow="xl" key={'skeleton' + i} rounded="lg" />)}
            {!areVariantsLoading && variants?.search.items.map((item, index) => {
              return (
                <Box key={"index" + item && index} w="277px" h="428px">
                  <ProductItem canHover={closeSearchResults} item={item}></ProductItem>
                </Box>
              )
            })}
          </SimpleGrid>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItems={variants?.search.totalItems ?? 0} isLoading={areVariantsLoading}></Pagination>
        </Box>
      </HStack>
    </Container>
  )
}

export default Home