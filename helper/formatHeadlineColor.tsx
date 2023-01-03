import { As, Heading, ListItem, OrderedList, UnorderedList, Text } from '@chakra-ui/react'
import parse, { domToReact } from 'html-react-parser'
import { NextLink } from '../utility/NextLink'
import type { DOMNode, Element, HTMLReactParserOptions } from 'html-react-parser'

const toCamelCase = (s: string) => s.replace(/-./g, x => x[1].toUpperCase())

const styleStringAsObject = (style: string) => {
    const noWhitespace = style.replace(/\s+/g, '')
    const attributes = noWhitespace.split(';')

    return Object.fromEntries(attributes.map(attribute => {
        const entry = attribute.split(/:(.+)/)
        const key = entry.splice(0, 1)[0]
        const value = entry.filter(e => e !== '').join(':')
        return [key, value]
    }))
}

function isParsableElement(domNode: DOMNode | Element): domNode is Element {
    return domNode.constructor.name === 'Element' || domNode.type === 'tag'
}

const options: HTMLReactParserOptions = {
    replace: domNode => {
        if (isParsableElement(domNode)) {
            const children = domNode.children
            const tagName = domNode.name

            const safeAttribs: { [key: string]: string | object | number } = {}
            for (const [key, value] of Object.entries(domNode.attribs)) {
                const safeKey = toCamelCase(key)
                switch (safeKey) {
                    case 'style':
                        safeAttribs[safeKey] = styleStringAsObject(value)
                        break
                    case 'tabindex':
                        safeAttribs.tabIndex = Number(value)
                        break
                    default: safeAttribs[safeKey] = value
                }
            }

            const reHeading = /^h\[1-9]$/
            if (tagName.match(reHeading)) {
                const heading: As = (tagName as As)
                return (
                    <Heading
                        as={heading}
                        marginLeft="auto"
                        marginRight="auto"
                        pb={['8px', '20px']}
                        pt={['20px', '40px']}
                        lineHeight={1}
                        {...safeAttribs}
                    >{domToReact(children, options)}
                    </Heading>
                )
            }
            switch (tagName) {
                case 'a': {
                    return (
                        <NextLink
                            textDecoration="underline"
                            {...safeAttribs}
                        >{domToReact(children, options)}
                        </NextLink>
                    )
                }
                case 'ul': {
                    return (
                        <UnorderedList
                            {...safeAttribs}
                        >{domToReact(children, options)}
                        </UnorderedList>
                    )
                }
                case 'ol': {
                    return (
                        <OrderedList
                            {...safeAttribs}
                        >{domToReact(children, options)}
                        </OrderedList>
                    )
                }
                case 'li': {
                    return (
                        <ListItem
                            {...safeAttribs}
                        >{domToReact(children, options)}
                        </ListItem>
                    )
                }
                case 'p': {
                    return (
                        <Text
                            {...safeAttribs}
                        >{domToReact(children, options)}
                        </Text>
                    )
                }
                // case 'blockquote': {
                //   return (
                //     <Box
                //       as="blockquote"
                //       paddingLeft="20px"
                //       borderLeft="3px solid"
                //       borderColor="accent.500"
                //       {...safeAttribs}
                //     >{domToReact(children, options)}
                //     </Box>
                //   )
                // }
            }
        }
    },
}

const asComponent = (plainHtml: string) => {
    return <>{parse(plainHtml, options)}</>
}

export function formatHeadlineColor(string: string) {
    if (!string.includes('_')) return string

    const regex = /(_([\s\S]*?)_)/g
    const match = string.match(regex)
    // if there is no match, return the string
    if (!match) return string
    const target = match[0]

    return asComponent(string.replace(target, `<span style="color: red"> ${target.replace(/_/g, '')}</span>`))
}
