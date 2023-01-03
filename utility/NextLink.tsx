import type { LinkProps } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import AwesomeLink from 'next/link'
import type React from 'react'

interface INextLinkProps extends LinkProps {
    href?: string
}

export const NextLink: React.FC<INextLinkProps> = ({ href, ...linkProps }) => {
    return (
        <AwesomeLink href={href ?? ''} passHref>
            <Link {...linkProps} />
        </AwesomeLink>
    )
}
