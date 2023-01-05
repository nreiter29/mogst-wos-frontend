import { Heading, HStack, VStack, Text, Box, Checkbox, Divider } from "@chakra-ui/react"
import { useState } from "react"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { CustomLink } from "../utility/CustomLink"

const FilterFolded: React.FC<{
    facet: {
        name: string;
        values: {
            name: string;
        }[];
    },
}> = ({ facet }) => {
    const [unFolded, setUnfolded] = useState(false)

    return (
        <VStack align="inherit" w="175px">
            <CustomLink onClick={() => setUnfolded(!unFolded)} href="" _hover={{ textDecor: "none" }} transition=".5s">
                <HStack py="2">
                    {unFolded ? <BiArrowFromTop fontSize="21px" /> : <BiArrowFromLeft fontSize="21px" />}
                    <Heading as="h4" fontSize="lg">{formatFirstLetterToUppercase(facet.name)}</Heading>
                </HStack>
            </CustomLink>
            <Box>
                {unFolded && facet.values.map((item, index) => {
                    return (
                        <>
                            <HStack key={item && index} align="inherit" pb={(index + 1) == facet.values.length ? "10px" : ""} justify="space-between">
                                <Text fontWeight="semibold">{formatFirstLetterToUppercase(item.name)}</Text>
                                <Checkbox />
                            </HStack>
                        </>
                    )
                }
                )
                }
            </Box>
        </VStack>
    )
}

export default FilterFolded