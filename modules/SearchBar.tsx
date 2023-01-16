import { Search2Icon } from '@chakra-ui/icons'
import type { InputProps } from '@chakra-ui/react'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

interface ISearchBar extends InputProps {
    isLoading?: boolean
    searchOpen?: boolean
}

interface IColors {
    colorBackground?: string
    colorText?: string
    colorAccent?: string
    colorIcon?: string
}

interface ICombined extends IColors, ISearchBar { }

export const SearchBar: React.FC<ICombined> = ({
    colorBackground = 'secondaryBackground.500',
    colorAccent = 'accent.650',
    colorText = 'secondaryText.900',
    colorIcon = 'secondaryText.500',
    isLoading = false,
    searchOpen = false,
    ...inputProps
}) => {
    return (
        <InputGroup>
            <Input
                w="100%"
                backgroundColor={colorBackground}
                fontSize="md"
                color={colorText}
                placeholder="Search Products"
                type="search"
                borderRadius="20"
                padding="5"
                _placeholder={{
                    opacity: 0.6,
                    color: 'black',
                }}
                transitionProperty="outline-color, box-shadow"
                transitionTimingFunction="ease-in-out, ease-in-out"
                transitionDuration="0.15s, 0.15s"
                _focus={{
                    outlineWidth: '1.5px',
                    outlineStyle: 'solid',
                    outlineColor: colorAccent,
                }}
                {...inputProps}
            />
            <InputRightElement>
                <IconButton
                    aria-label="Search database"
                    variant="link"
                    icon={<Search2Icon />}
                    fontSize="18"
                    pr="4"
                    color={colorIcon}
                />
            </InputRightElement>
        </InputGroup>
    )
}