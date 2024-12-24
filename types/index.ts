import type { HexColor, RgbColor } from '@yoruverse-js/palette'

export type Color = HexColor | RgbColor;

export interface ColorVariable {
    dark: Color
    light: Color
}

export type ColorProperty = Record<string, ColorVariable>