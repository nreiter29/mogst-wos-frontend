import { Box, Divider, Heading, HStack, VStack } from "@chakra-ui/react"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { useFacetsQuery } from "../operations/useFacetsQuery"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import { useState } from "react"
import { CustomLink } from "../utility/CustomLink"
import FilterFolded from "../modules/FilterFolded"

const Filter = () => {
    const { data, isLoading, refetch } = useFacetsQuery()

    return (
        <VStack py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }} align="left">
            <Heading fontSize="3xl" as="h3" my="8">Categories</Heading>
            <VStack align="inherit">
                {data?.data.facets.items.map((facet, index) => {
                    return (
                        <Box key={facet && index} borderBottom="1px" borderColor="blackAlpha.400">
                            <FilterFolded facet={facet} />
                        </Box>
                    )
                })
                }
            </VStack>
        </VStack>
    )
}

export default Filter