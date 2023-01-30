import { Box, Button, Heading, Skeleton, useToast, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import FilterFolded from "../modules/FilterFolded"

const Filter: React.FC<{
    setFacetNumber: (id: null | number[]) => void,
    facetValues: {
        [key: string]: Array<{
            name: string;
            id: string;
        }>
    },
    isLoading: boolean
}> = ({ setFacetNumber, facetValues, isLoading }) => {
    const [selectedFacets, setSelectedFacets] = useState<number[]>([])
    const [isChecked, setIsChecked] = useState<boolean | undefined>()
    const toast = useToast()

    useEffect(() => {
        setInterval(() => {
            setIsChecked(undefined)
        }, 1000)
    }, [isChecked])

    return (
        <VStack py={{ base: "6", sm: "0" }} align="left">
            <Heading fontSize="4xl" as="h3" mb="6" mt="8">Filter</Heading>
            <VStack align="inherit">
                {isLoading && [...Array(4)].map((e, i) => <Skeleton key={'skeleton' + i} w="175px" h="46px" />)}
                {Object.keys(facetValues).map((facet, index) => {
                    return (
                        <Box key={"Filter" + facet && index} borderBottom="1px" borderColor="blackAlpha.400">
                            <FilterFolded
                                setFacetNumber={setFacetNumber}
                                selectedFacets={selectedFacets}
                                setSelectedFacets={setSelectedFacets}
                                name={facet}
                                facetValues={facetValues}
                                isChecked={isChecked} />
                        </Box>
                    )
                })
                }
            </VStack>
            {isLoading ?
                <Skeleton w="175px" h="40px" /> :
                <Button fontSize="lg"
                    color="secondaryText.500"
                    bgColor="primaryButtonColor.500"
                    _hover={{ bgColor: "primaryButtonColor.300" }}
                    onClick={() => (setFacetNumber([]), toast({
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