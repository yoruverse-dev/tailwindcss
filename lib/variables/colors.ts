import { Palette, type HexColor, type RgbColor } from '@yoruverse-js/palette'

class ColorVariable {
    constructor(
        public name: string,
        public light: HexColor | RgbColor,
        public dark: HexColor | RgbColor,
        public palette: Palette
    ) { }

    toString(mode: 'light' | 'dark' = 'light') {
        if (mode === 'light') {
            return this.palette.isHexColor(this.light) ? this.light : this.palette.isRbgColor(this.light) ? this.palette.rgbToString(this.light) : 'black'
        }

        return this.palette.isHexColor(this.dark) ? this.dark : this.palette.isRbgColor(this.dark) ? this.palette.rgbToString(this.dark) : 'white'
    }

    public toLight(prefix?: string) {
        return {
            [`--${prefix ? prefix + '-' : ''}${this.name}`]: this.toString('light')
        }
    }

    public toDark(prefix?: string) {
        return {
            [`--${prefix ? prefix + '-' : ''}${this.name}`]: this.toString('dark')
        }
    }

    public toVariable(property: string, prefix?: string) {
        return {
            [`.${prefix ? prefix + '-' : ''}${this.name}`]: {
                [property]: `var(--${prefix ? prefix + '-' : ''}${this.name})`
            }
        }
    }
}

export class Colors {
    constructor(
        public property: string,
        public palette: Palette,
        public colors: ColorVariable[] = [],
        public prefix?: string
    ) { }

    public createVariable(name: string, light: HexColor | RgbColor, dark: HexColor | RgbColor) {
        this.colors.push(new ColorVariable(name, light, dark, this.palette))
    }

    public toLight(prefix?: string): Record<string, string> {
        return this.colors.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toLight(prefix),
            }
        }, {})
    }

    public toDark(prefix?: string): Record<string, string> {
        return this.colors.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toDark(prefix),
            }
        }, {})
    }

    public toVariable(prefix?: string): Record<string, Record<string, string>> {
        return this.colors.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toVariable(this.property, prefix),
            }
        }, {})
    }
}

