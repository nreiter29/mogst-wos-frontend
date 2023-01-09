import { HStack, Text, Checkbox, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase";

const FilterFoldedChecker: React.FC<{
    item: {
        name: string;
        id: string;
    },
    setFacetId: (id: null | number[]) => void,
    index: number,
    length: number,
    facetId: null | number[],
    selectedFacets: Array<number>,
    setSelectedFacets: (facetIdArray: Array<number>) => void,
    refetch: () => void,
    unFolded: boolean
}> = ({ item, setFacetId, index, length, selectedFacets: facetIdArray, refetch, setSelectedFacets: setFacetIdArray, facetId, unFolded }) => {
    const [isChecked, useIsChecked] = useState<boolean>(false)

    useEffect(() => {
        console.log("in:", facetIdArray)
    }, [facetIdArray])

    useEffect(() => {
        if (isChecked) {
            setFacetIdArray(facetIdArray.concat(Number(item.id)))
            setFacetId(facetIdArray.concat(Number(item.id)))
        } else if (!isChecked) {
            if (facetIdArray.length != 0) {
                const idx = facetIdArray.indexOf(Number(item.id))
                facetIdArray.splice(idx, 1)
                setFacetId(facetIdArray)
            }
        }
        refetch()
    }, [isChecked])

    return (
        <Box display={unFolded ? "normal" : "none"}>
            <HStack align="inherit" pb={(index + 1) == length ? "10px" : ""} justify="space-between" fontSize="sm">
                <Text fontWeight="semibold">{formatFirstLetterToUppercase(item.name)}</Text>
                <Checkbox onChange={() => useIsChecked(!isChecked)} />
            </HStack>
        </Box>
    )
}

export default FilterFoldedChecker