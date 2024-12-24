import { Palette, type HexColor, type RgbColor } from '@yoruverse-js/palette'

const palette = new Palette()
const colors = palette.colors()

class ColorVariable {
    constructor(
        public name: string,
        public light: HexColor | RgbColor,
        public dark: HexColor | RgbColor,
    ) { }

    toString(mode: 'light' | 'dark' = 'light') {
        if (mode === 'light') {
            return palette.isHexColor(this.light) ? this.light : palette.isRbgColor(this.light) ? palette.rgbToString(this.light) : 'black'
        }

        return palette.isHexColor(this.dark) ? this.dark : palette.isRbgColor(this.dark) ? palette.rgbToString(this.dark) : 'white'
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

class ColorProperty {
    constructor(
        public colorVariables: ColorVariable[],
        public property: string
    ) { }

    public toLight(prefix?: string): Record<string, string> {
        return this.colorVariables.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toLight(prefix),
            }
        }, {})
    }

    public toDark(prefix?: string): Record<string, string> {
        return this.colorVariables.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toDark(prefix),
            }
        }, {})
    }

    public toVariable(prefix?: string): Record<string, Record<string, string>> {
        return this.colorVariables.reduce((acc, color) => {
            return {
                ...acc,
                ...color.toVariable(this.property, prefix),
            }
        }, {})
    }
}

export const textColor = new ColorProperty([
    new ColorVariable('text-primary', colors['gray-light'][900], colors['gray-dark'][50]),
    new ColorVariable('text-primary_on-brand', colors['base']['white'], colors['gray-dark'][50]),
    new ColorVariable('text-secondary', colors['gray-light'][700], colors['gray-dark'][300]),
    new ColorVariable('text-secondary_hover', colors['gray-light'][800], colors['gray-dark'][200]),
    new ColorVariable('text-secondary_on-brand', colors['brand'][200], colors['brand'][400]),
    new ColorVariable('text-tertiary', colors['gray-light'][500], colors['gray-dark'][400]),
    new ColorVariable('text-tertiary_hover', colors['gray-light'][700], colors['gray-dark'][300]),
    new ColorVariable('text-tertiary_on-brand', colors['brand'][200], colors['brand'][300]),
    new ColorVariable('text-quaternary', colors['gray-light'][500], colors['gray-dark'][400]),
    new ColorVariable('text-quaternary_on-brand', colors['brand'][300], colors['brand'][400]),
    new ColorVariable('text-white', colors['base']['white'], colors['base']['white']),
    new ColorVariable('text-disabled', colors['gray-light'][500], colors['gray-dark'][500]),
    new ColorVariable('text-placeholder', colors['gray-light'][500], colors['gray-dark'][400]),
    new ColorVariable('text-placeholder_subtle', colors['gray-light'][300], colors['gray-dark'][700]),
    new ColorVariable('text-brand-primary', colors['brand'][900], colors['brand'][50]),
    new ColorVariable('text-brand-secondary', colors['brand'][700], colors['brand'][300]),
    new ColorVariable('text-brand-tertiary', colors['brand'][600], colors['brand'][400]),
    new ColorVariable('text-brand-tertiary_alt', colors['brand'][600], colors['brand'][50]),
    new ColorVariable('text-error-primary', colors['error'][600], colors['error'][400]),
    new ColorVariable('text-warning-primary', colors['warning'][600], colors['warning'][400]),
    new ColorVariable('text-success-primary', colors['success'][600], colors['success'][400]),
], 'color')

export const borderColor = new ColorProperty([
    new ColorVariable('border-primary', colors['gray-light'][300], colors['gray-dark'][700]),
    new ColorVariable('border-secondary', colors['gray-light'][200], colors['gray-dark'][800]),
    new ColorVariable('border-tertiary', colors['gray-light'][100], colors['gray-dark'][800]),
    new ColorVariable('border-disabled', colors['gray-light'][300], colors['gray-dark'][700]),
    new ColorVariable('border-disabled_subtle', colors['gray-light'][200], colors['gray-dark'][800]),
    new ColorVariable('border-brand', colors['brand'][500], colors['brand'][400]),
    new ColorVariable('border-brand_alt', colors['brand'][600], colors['brand'][700]),
    new ColorVariable('border-error', colors['error'][500], colors['error'][400]),
    new ColorVariable('border-error_subtle', colors['error'][300], colors['error'][400]),
], 'border-color')

export const foregroundColor = new ColorProperty([
    new ColorVariable('fg-primary', colors['gray-light'][900], colors['base']['white']),
    new ColorVariable('fg-secondary', colors['gray-light'][700], colors['gray-dark'][300]),
    new ColorVariable('fg-secondary_hover', colors['gray-light'][800], colors['gray-dark'][200]),
    new ColorVariable('fg-tertiary', colors['gray-light'][500], colors['gray-dark'][400]),
    new ColorVariable('fg-tertiary_hover', colors['gray-light'][700], colors['gray-dark'][300]),
    new ColorVariable('fg-quaternary', colors['gray-light'][500], colors['gray-dark'][400]),
    new ColorVariable('fg-quaternary_hover', colors['gray-light'][600], colors['gray-dark'][300]),
    new ColorVariable('fg-quinary', colors['gray-light'][400], colors['gray-dark'][500]),
    new ColorVariable('fg-quinary_hover', colors['gray-light'][400], colors['gray-dark'][400]),
    new ColorVariable('fg-senary', colors['gray-light'][300], colors['gray-dark'][600]),
    new ColorVariable('fg-white', colors['base']['white'], colors['base']['white']),
    new ColorVariable('fg-disabled', colors['gray-light'][400], colors['gray-dark'][500]),
    new ColorVariable('fg-disabled_subtle', colors['gray-light'][300], colors['gray-dark'][600]),
    new ColorVariable('fg-brand-primary', colors['brand'][600], colors['brand'][500]),
    new ColorVariable('fg-brand-primary_alt', colors['brand'][600], colors['gray-dark'][300]),
    new ColorVariable('fg-brand-secondary', colors['brand'][500], colors['brand'][400]),
    new ColorVariable('fg-error-primary', colors['error'][600], colors['error'][500]),
    new ColorVariable('fg-error-secondary', colors['error'][500], colors['error'][400]),
    new ColorVariable('fg-warning-primary', colors['warning'][600], colors['warning'][500]),
    new ColorVariable('fg-warning-secondary', colors['warning'][500], colors['warning'][400]),
    new ColorVariable('fg-success-primary', colors['success'][600], colors['success'][500]),
    new ColorVariable('fg-success-secondary', colors['success'][500], colors['success'][400]),
], 'background-color')

export const backgroundColor = new ColorProperty([
    new ColorVariable('bg-primary', colors['base']['white'], colors['gray-dark'][950]),
    new ColorVariable('bg-primary_alt', colors['base']['white'], colors['gray-dark'][900]),
    new ColorVariable('bg-primary_hover', colors['gray-light'][50], colors['gray-dark'][800]),
    new ColorVariable('bg-primary-solid', colors['gray-light'][950], colors['gray-dark'][900]),
    new ColorVariable('bg-secondary', colors['gray-light'][50], colors['gray-dark'][800]),
    new ColorVariable('bg-secondary_alt', colors['gray-light'][50], colors['gray-dark'][900]),
    new ColorVariable('bg-secondary_hover', colors['gray-light'][100], colors['gray-dark'][800]),
    new ColorVariable('bg-secondary_subtle', colors['gray-light'][25], colors['gray-dark'][900]),
    new ColorVariable('bg-secondary-solid', colors['gray-light'][600], colors['gray-dark'][600]),
    new ColorVariable('bg-tertiary', colors['gray-light'][100], colors['gray-dark'][800]),
    new ColorVariable('bg-quaternary', colors['gray-light'][200], colors['gray-dark'][700]),
    new ColorVariable('bg-active', colors['gray-light'][50], colors['gray-dark'][800]),
    new ColorVariable('bg-disabled', colors['gray-light'][100], colors['gray-dark'][800]),
    new ColorVariable('bg-disabled_subtle', colors['gray-light'][50], colors['gray-dark'][900]),
    new ColorVariable('bg-overlay', colors['gray-light'][950], colors['gray-dark'][800]),
    new ColorVariable('bg-brand-primary', colors['brand'][50], colors['brand'][500]),
    new ColorVariable('bg-brand-primary_alt', colors['brand'][50], colors['gray-dark'][800]),
    new ColorVariable('bg-brand-secondary', colors['brand'][100], colors['brand'][600]),
    new ColorVariable('bg-brand-solid', colors['brand'][600], colors['brand'][600]),
    new ColorVariable('bg-brand-solid_hover', colors['brand'][700], colors['brand'][500]),
    new ColorVariable('bg-brand-section', colors['brand'][800], colors['gray-dark'][800]),
    new ColorVariable('bg-brand-section_subtle', colors['brand'][700], colors['gray-dark'][950]),
    new ColorVariable('bg-error-primary', colors['error'][50], colors['error'][500]),
    new ColorVariable('bg-error-secondary', colors['error'][100], colors['error'][600]),
    new ColorVariable('bg-error-solid', colors['error'][600], colors['error'][600]),
    new ColorVariable('bg-warning-primary', colors['warning'][50], colors['warning'][500]),
    new ColorVariable('bg-warning-secondary', colors['warning'][100], colors['warning'][600]),
    new ColorVariable('bg-warning-solid', colors['warning'][600], colors['warning'][600]),
    new ColorVariable('bg-success-primary', colors['success'][50], colors['success'][500]),
    new ColorVariable('bg-success-secondary', colors['success'][100], colors['success'][600]),
    new ColorVariable('bg-success-solid', colors['success'][600], colors['success'][600]),
], 'background-color')

export const extendedTheme = (prefix?: string) => {
    const keys = palette.keys

    let colorUtilities = {}

    for (const key of keys) {
        const color = colors[key]
        const acc = Object.keys(color).reduce((acc, value) => {
            const val = palette.isHexColor(color[value]) ? color[value] : palette.rgbToString(color[value])
            return {
                ...acc,
                [`${prefix ? prefix + '-' : ''}${key}-${value}`]: val
            }
        }, {} as Record<string, string>)

        colorUtilities = {
            ...colorUtilities,
            ...acc
        }
    }

    return colorUtilities
}