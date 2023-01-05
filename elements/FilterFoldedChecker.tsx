import { HStack, Text, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase";

const FilterFoldedChecker: React.FC<{
    item: {
        name: string;
        id: string;
    },
    setFacetId: (id: number | null | Array<number>) => void,
    index: number,
    length: number,
    facetId: number | null | Array<number>,
    facetIdArray: Array<number>,
    setFacetIdArray: (facetIdArray: Array<number>) => void
}> = ({ item, setFacetId, index, length, facetIdArray, facetId, setFacetIdArray }) => {
    const [isChecked, useIsChecked] = useState<boolean>(false)

    console.log(facetIdArray)
    useEffect(() => {
        if (isChecked) {
            setFacetId(Number(item.id))
            facetIdArray.push(Number(item.id))
            if (facetIdArray.length > 2) {
                setFacetId(facetIdArray)
            }
        } else if (!isChecked) {
            setFacetId(null)
        }
    }, [isChecked])

    return (
        <>
            <HStack align="inherit" pb={(index + 1) == length ? "10px" : ""} justify="space-between">
                <Text fontWeight="semibold">{formatFirstLetterToUppercase(item.name)}</Text>
                <Checkbox onChange={() => useIsChecked(!isChecked)} />
            </HStack>
        </>
    )
}

export default FilterFoldedChecker