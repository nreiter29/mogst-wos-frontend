import Color from 'color'

function getShades(color: string) {
  return {
    50: Color(color).negate().darken(0.9).negate().hex(),
    100: Color(color).negate().darken(0.8).negate().hex(),
    150: Color(color).negate().darken(0.7).negate().hex(),
    200: Color(color).negate().darken(0.6).negate().hex(),
    250: Color(color).negate().darken(0.5).negate().hex(),
    300: Color(color).negate().darken(0.4).negate().hex(),
    350: Color(color).negate().darken(0.3).negate().hex(),
    400: Color(color).negate().darken(0.2).negate().hex(),
    450: Color(color).negate().darken(0.1).negate().hex(),
    500: color,
    550: Color(color).darken(0.1).hex(),
    600: Color(color).darken(0.2).hex(),
    650: Color(color).darken(0.3).hex(),
    700: Color(color).darken(0.4).hex(),
    750: Color(color).darken(0.5).hex(),
    800: Color(color).darken(0.6).hex(),
    850: Color(color).darken(0.7).hex(),
    900: Color(color).darken(0.8).hex(),
    950: Color(color).darken(0.9).hex(),
  }
}

export const colors = {
  primaryText: getShades("#43464B"),
  secondaryText: getShades("#E9F1F2"),
  primaryBackground: getShades("#FFF9F5"),
  primaryButtonColor: getShades("#735B4C"),
  secondaryButton: getShades("#6A546E"),
  backHome: getShades("#856B10"),
}
