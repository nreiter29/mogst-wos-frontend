import { extendTheme } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import { colors } from './colors'

export const Fonts = () => {
  return (
    <Global styles={css`
  @font-face {
    font-family: "SFProMedium";
    src: url(/SFPRODISPLAYMEDIUM.OTF);
  }
  @font-face {
    font-family: "SFProRegular";
    src: url(/SFPRODISPLAYREGULAR.OTF);
  }
  `} />
  )
}

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `"SFProMedium"`,
    body: `"SFProRegular"`,
    text: `"SFProRegular"`,
  },
  styles: {
    global: () => ({
      body: {
        bg: "primaryBackground.500",
        color: "primaryText.500",
      },
      _selection: {
        backgroundColor: "selectionColor.500",
        color: "primaryText.500"
      }
    })
  }
})