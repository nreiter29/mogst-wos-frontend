import { Box, Button, Divider, Heading, HStack, Skeleton, useToast, VStack } from "@chakra-ui/react"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { useFacetsQuery } from "../operations/useFacetsQuery"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CustomLink } from "../utility/CustomLink"
import FilterFolded from "../modules/FilterFolded"
import { stat } from "fs"

const Filter: React.FC<{
    setFacetId: (
        id: null | number[]) => void,
    facetId: null | number[],
    facetValues: {
        [key: string]: Array<{
            name: string;
            id: string;
        }>
    },
    isLoading: boolean
}> = ({ setFacetId, facetId, facetValues, isLoading }) => {
    const [selectedFacets, setSelectedFacets] = useState<number[]>([])
    const [isChecked, setIsChecked] = useState<boolean | undefined>()
    let idx = 0
    const toast = useToast()
    useEffect(() => {
        setInterval(() => {
            setIsChecked(undefined)
        }, 1000)
    }, [isChecked])

    return (
        <VStack py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }} align="left">
            <Heading fontSize="3xl" as="h3" my="8">Filter</Heading>
            <VStack align="inherit">
                {isLoading && [...Array(4)].map((e, i) => <Skeleton key={'skeleton' + i} w="175px" h="46px" />)}
                {Object.keys(facetValues).map((facet, index) => {
                    idx++
                    return (
                        <Box key={"Filter" + facet && index} borderBottom="1px" borderColor="blackAlpha.400">
                            <FilterFolded setFacetId={setFacetId} facetId={facetId} selectedFacets={selectedFacets} setSelectedFacets={setSelectedFacets} name={facet} facetValues={facetValues} isChecked={isChecked} />
                        </Box>
                    )
                })
                }
            </VStack>
            {isLoading ?
                <Skeleton w="175px" h="40px" /> :
                <Button fontSize="lg" onClick={() => (setFacetId([]), toast({
                    title: "Filter reseted",
                    description: "The filter reseted succesfully.",
                    status: "success",
                    duration: 2500,
                    isClosable: true
                }), setIsChecked(false))}>Reset filter</Button>
            }
        </VStack >
    )
}

export default Filter