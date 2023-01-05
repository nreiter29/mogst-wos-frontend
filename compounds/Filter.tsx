import { Box, Divider, Heading, HStack, Skeleton, VStack } from "@chakra-ui/react"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { useFacetsQuery } from "../operations/useFacetsQuery"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import { Dispatch, SetStateAction, useState } from "react"
import { CustomLink } from "../utility/CustomLink"
import FilterFolded from "../modules/FilterFolded"

const Filter: React.FC<{ setFacetId: (id: number | null | Array<number>) => void, facetId: number | null | Array<number> }> = ({ setFacetId, facetId }) => {
    const { data, isLoading, refetch } = useFacetsQuery()

    return (
        <VStack py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }} align="left">
            <Heading fontSize="3xl" as="h3" my="8">Filter</Heading>
            <VStack align="inherit">
                <Skeleton isLoaded={!isLoading}>
                    {data?.data.facets.items.map((facet, index) => {
                        return (
                            <Box key={"Filter" + facet && index} borderBottom="1px" borderColor="blackAlpha.400">
                                <FilterFolded facet={facet} setFacetId={setFacetId} refetch={refetch} facetId={facetId} />
                            </Box>
                        )
                    })
                    }
                </Skeleton>
            </VStack>
        </VStack>
    )
}

export default Filter