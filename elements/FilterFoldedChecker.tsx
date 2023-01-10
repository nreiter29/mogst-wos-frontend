import { HStack, Text, Checkbox, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase";

const FilterFoldedChecker: React.FC<{
    item: {
        name: string;
        id: string;
    },
    setFacetId: (id: null | number[]) => void,
    length: number,
    facetId: null | number[],
    selectedFacets: Array<number>,
    setSelectedFacets: (facetIdArray: Array<number>) => void,
    unFolded: boolean,
    index: number,
    isChecked: boolean | undefined
}> = ({ item, setFacetId, length, selectedFacets: facetIdArray, setSelectedFacets: setFacetIdArray, facetId, unFolded, index, isChecked: reset }) => {
    const [isChecked, useIsChecked] = useState<boolean>(false)
    const [click, setClick] = useState<boolean>(false)

    useEffect(() => {
        if (!reset) {
            setClick(false)
        }
    }, [reset])

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
    }, [isChecked])

    return (
        <Box display={unFolded ? "normal" : "none"}>
            <HStack align="inherit" justify="space-between" fontSize="sm" pb={(index + 1) == length ? "10px" : ""}>
                <Text fontWeight="semibold">{formatFirstLetterToUppercase(item.name)}</Text>
                <Checkbox onChange={() => (setClick(!click), useIsChecked(!isChecked))} isChecked={click ? true : false} />
            </HStack>
        </Box>
    )
}

export default FilterFoldedChecker