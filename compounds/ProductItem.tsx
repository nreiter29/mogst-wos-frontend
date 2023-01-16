import { Box, Heading, HStack, Image } from "@chakra-ui/react"
import { FormattedNumber } from "react-intl"
import { CustomLink } from "../utility/CustomLink"

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
    return (
        <CustomLink href={`/product/${item.slug}?sku=${item.sku}`} _hover={{ textDecor: "none" }}>
            <Box _hover={{ backgroundColor: canHover && "hoverItem.500" }} transition=".5s" boxShadow="xl" rounded="lg" h="440px">
                <Box height="380px">
                    <Image
                        rounded="lg"
                        src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                        alt={item.productVariantName ?? "Standard Picture"}
                        h="full"
                        w="full"
                        objectFit="cover"
                        objectPosition="center"
                        p="3"
                        transition=".5s"
                        _hover={{ p: canHover && "0" }}
                    />
                </Box>
                <HStack justify="space-between" align="center" fontSize="sm" p="1" spacing="0" mx="3">
                    <Heading as="h3" fontSize="sm" mr="2">{item.productVariantName}</Heading>
                    <FormattedNumber
                        value={+item.priceWithTax.value / 100}
                        style="currency"
                        currency="EUR"
                        minimumFractionDigits={2}
                        maximumFractionDigits={2} />
                </HStack>
            </Box>
        </CustomLink>
    )
}

export default ProductItem