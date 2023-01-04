import { Box, Link, Image, HStack, Heading, Text, textDecoration, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { FormattedNumber } from "react-intl"
import { NextLink } from "../utility/NextLink"

export interface IProductItem {
    canHover: boolean
    item: {
        sku: string
        slug: string
        productId: string
        productName: string
        productVariantId: string
        productVariantName: string
        description: string
        priceWithTax: {
            value: number
        }
        productVariantAsset: {
            preview: string
        }
    }
}

const ProductItem: React.FC<IProductItem> = ({ canHover, item }) => {
    const [hover, setHover] = useState(false)

    return (
        <NextLink href="/" _hover={{ textDecor: "none" }}>
            <Stack spacing={0} _hover={{ backgroundColor: canHover && "#eeeeee", p: canHover && "0" }} onMouseEnter={() => canHover && setHover(true)} onMouseLeave={() => canHover && setHover(false)} transition=".5s" boxShadow="xl" rounded="lg" p="3" h="433px">
                <Box height="380px">
                    <Image
                        rounded="lg"
                        src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                        alt={item.productVariantName ?? "Standard Picture"}
                        h="full"
                        w="full"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </Box>
                <HStack justify="space-between" align="center" fontSize={hover ? "md" : "sm"} whiteSpace="nowrap" p="1" my={hover ? "10px" : ""} transition=".5s" mx={hover ? "3" : ""} spacing="0">
                    <Heading as="h3" fontSize={hover ? "md" : "sm"}>{item.productVariantName}</Heading>
                    <FormattedNumber
                        value={+item.priceWithTax.value / 100}
                        style="currency"
                        currency="EUR"
                        minimumFractionDigits={2}
                        maximumFractionDigits={2} />
                </HStack>
            </Stack>
        </NextLink>
    )
}

export default ProductItem