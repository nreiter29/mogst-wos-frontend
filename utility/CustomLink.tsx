import { Link } from "@chakra-ui/react"
import React from "react"
import NextLink from "next/link"

export const CustomLink = ({ ...props }) => {
    return (
        <Link as={NextLink} {...props}>
            {props.children}
        </Link>
    )
}