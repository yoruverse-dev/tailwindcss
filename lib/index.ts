import { default as tw } from 'tailwindcss/plugin'
import { Colors } from './variables/colors'
import { spacing } from './variables/spacing'
import { Palette } from '@yoruverse-js/palette'

export class Plugin {

    public palette: Palette
    public version = '0.0.3'
    public prefix?: string
    public textColor: Colors
    public borderColor: Colors
    public foregroundColor: Colors
    public backgroundColor: Colors

    constructor(palette?: Palette, prefix?: string, textColor?: Colors, borderColor?: Colors, foregroundColor?: Colors, backgroundColor?: Colors) {
        this.palette = palette || new Palette()
        this.prefix = prefix
        this.textColor = textColor || new Colors('color', this.palette, [], this.prefix)
        this.borderColor = borderColor || new Colors('border-color', this.palette, [], this.prefix)
        this.foregroundColor = foregroundColor || new Colors('background-color', this.palette, [], this.prefix)
        this.backgroundColor = backgroundColor || new Colors('background-color', this.palette, [], this.prefix)
    }

    #loadDefaultTextColors() {
        const text = this.textColor
        const colors = this.palette.colors()
        text.createVariable('text-primary', colors['gray-light'][900], colors['gray-dark'][50])
        text.createVariable('text-primary', colors['gray-light'][900], colors['gray-dark'][50])
        text.createVariable('text-primary_on-brand', colors['base']['white'], colors['gray-dark'][50])
        text.createVariable('text-secondary', colors['gray-light'][700], colors['gray-dark'][300])
        text.createVariable('text-secondary_hover', colors['gray-light'][800], colors['gray-dark'][200])
        text.createVariable('text-secondary_on-brand', colors['brand'][200], colors['brand'][400])
        text.createVariable('text-tertiary', colors['gray-light'][500], colors['gray-dark'][400])
        text.createVariable('text-tertiary_hover', colors['gray-light'][700], colors['gray-dark'][300])
        text.createVariable('text-tertiary_on-brand', colors['brand'][200], colors['brand'][300])
        text.createVariable('text-quaternary', colors['gray-light'][500], colors['gray-dark'][400])
        text.createVariable('text-quaternary_on-brand', colors['brand'][300], colors['brand'][400])
        text.createVariable('text-white', colors['base']['white'], colors['base']['white'])
        text.createVariable('text-disabled', colors['gray-light'][500], colors['gray-dark'][500])
        text.createVariable('text-placeholder', colors['gray-light'][500], colors['gray-dark'][400])
        text.createVariable('text-placeholder_subtle', colors['gray-light'][300], colors['gray-dark'][700])
        text.createVariable('text-brand-primary', colors['brand'][900], colors['brand'][50])
        text.createVariable('text-brand-secondary', colors['brand'][700], colors['brand'][300])
        text.createVariable('text-brand-tertiary', colors['brand'][600], colors['brand'][400])
        text.createVariable('text-brand-tertiary_alt', colors['brand'][600], colors['brand'][50])
        text.createVariable('text-error-primary', colors['error'][600], colors['error'][400])
        text.createVariable('text-warning-primary', colors['warning'][600], colors['warning'][400])
        text.createVariable('text-success-primary', colors['success'][600], colors['success'][400])
    }

    #loadDefaultBorderColors() {
        const border = this.borderColor
        const colors = this.palette.colors()
        border.createVariable('border-primary', colors['gray-light'][300], colors['gray-dark'][700])
        border.createVariable('border-secondary', colors['gray-light'][200], colors['gray-dark'][800])
        border.createVariable('border-tertiary', colors['gray-light'][100], colors['gray-dark'][800])
        border.createVariable('border-disabled', colors['gray-light'][300], colors['gray-dark'][700])
        border.createVariable('border-disabled_subtle', colors['gray-light'][200], colors['gray-dark'][800])
        border.createVariable('border-brand', colors['brand'][500], colors['brand'][400])
        border.createVariable('border-brand_alt', colors['brand'][600], colors['gray-dark'][700])
        border.createVariable('border-error', colors['error'][500], colors['error'][400])
        border.createVariable('border-error_subtle', colors['error'][300], colors['error'][400])

    }

    #loadDefaultforegroundColors() {
        const foreground = this.foregroundColor
        const colors = this.palette.colors()
        foreground.createVariable('fg-primary', colors['gray-light'][900], colors['base']['white'])
        foreground.createVariable('fg-secondary', colors['gray-light'][700], colors['gray-dark'][300])
        foreground.createVariable('fg-secondary_hover', colors['gray-light'][800], colors['gray-dark'][200])
        foreground.createVariable('fg-tertiary', colors['gray-light'][500], colors['gray-dark'][400])
        foreground.createVariable('fg-tertiary_hover', colors['gray-light'][700], colors['gray-dark'][300])
        foreground.createVariable('fg-quaternary', colors['gray-light'][500], colors['gray-dark'][400])
        foreground.createVariable('fg-quaternary_hover', colors['gray-light'][600], colors['gray-dark'][300])
        foreground.createVariable('fg-quinary', colors['gray-light'][400], colors['gray-dark'][500])
        foreground.createVariable('fg-quinary_hover', colors['gray-light'][400], colors['gray-dark'][400])
        foreground.createVariable('fg-senary', colors['gray-light'][300], colors['gray-dark'][600])
        foreground.createVariable('fg-white', colors['base']['white'], colors['base']['white'])
        foreground.createVariable('fg-disabled', colors['gray-light'][400], colors['gray-dark'][500])
        foreground.createVariable('fg-disabled_subtle', colors['gray-light'][300], colors['gray-dark'][600])
        foreground.createVariable('fg-brand-primary', colors['brand'][600], colors['brand'][500])
        foreground.createVariable('fg-brand-primary_alt', colors['brand'][600], colors['gray-dark'][300])
        foreground.createVariable('fg-brand-secondary', colors['brand'][500], colors['brand'][400])
        foreground.createVariable('fg-error-primary', colors['error'][600], colors['error'][500])
        foreground.createVariable('fg-error-secondary', colors['error'][500], colors['error'][400])
        foreground.createVariable('fg-warning-primary', colors['warning'][600], colors['warning'][500])
        foreground.createVariable('fg-warning-secondary', colors['warning'][500], colors['warning'][400])
        foreground.createVariable('fg-success-primary', colors['success'][600], colors['success'][500])
        foreground.createVariable('fg-success-secondary', colors['success'][500], colors['success'][400])
    }

    #loadDefaultBackgroundColors() {
        const background = this.backgroundColor
        const colors = this.palette.colors()
        background.createVariable('bg-primary', colors['base']['white'], colors['gray-dark'][950])
        background.createVariable('bg-primary_alt', colors['base']['white'], colors['gray-dark'][900])
        background.createVariable('bg-primary_hover', colors['gray-light'][50], colors['gray-dark'][800])
        background.createVariable('bg-primary-solid', colors['gray-light'][950], colors['gray-dark'][900])
        background.createVariable('bg-secondary', colors['gray-light'][50], colors['gray-dark'][800])
        background.createVariable('bg-secondary_alt', colors['gray-light'][50], colors['gray-dark'][900])
        background.createVariable('bg-secondary_hover', colors['gray-light'][100], colors['gray-dark'][800])
        background.createVariable('bg-secondary_subtle', colors['gray-light'][25], colors['gray-dark'][900])
        background.createVariable('bg-secondary-solid', colors['gray-light'][600], colors['gray-dark'][600])
        background.createVariable('bg-tertiary', colors['gray-light'][100], colors['gray-dark'][800])
        background.createVariable('bg-quaternary', colors['gray-light'][200], colors['gray-dark'][700])
        background.createVariable('bg-active', colors['gray-light'][50], colors['gray-dark'][800])
        background.createVariable('bg-disabled', colors['gray-light'][100], colors['gray-dark'][800])
        background.createVariable('bg-disabled_subtle', colors['gray-light'][50], colors['gray-dark'][900])
        background.createVariable('bg-overlay', colors['gray-light'][950], colors['gray-dark'][800])
        background.createVariable('bg-brand-primary', colors['brand'][50], colors['brand'][500])
        background.createVariable('bg-brand-primary_alt', colors['brand'][50], colors['gray-dark'][800])
        background.createVariable('bg-brand-secondary', colors['brand'][100], colors['brand'][600])
        background.createVariable('bg-brand-solid', colors['brand'][600], colors['brand'][600])
        background.createVariable('bg-brand-solid_hover', colors['brand'][700], colors['brand'][500])
        background.createVariable('bg-brand-section', colors['brand'][800], colors['gray-dark'][800])
        background.createVariable('bg-brand-section_subtle', colors['brand'][700], colors['gray-dark'][950])
        background.createVariable('bg-error-primary', colors['error'][50], colors['error'][500])
        background.createVariable('bg-error-secondary', colors['error'][100], colors['error'][600])
        background.createVariable('bg-error-solid', colors['error'][600], colors['error'][600])
        background.createVariable('bg-warning-primary', colors['warning'][50], colors['warning'][500])
        background.createVariable('bg-warning-secondary', colors['warning'][100], colors['warning'][600])
        background.createVariable('bg-warning-solid', colors['warning'][600], colors['warning'][600])
        background.createVariable('bg-success-primary', colors['success'][50], colors['success'][500])
        background.createVariable('bg-success-secondary', colors['success'][100], colors['success'][600])
        background.createVariable('bg-success-solid', colors['success'][600], colors['success'][600])
    }

    default() {
        this.#loadDefaultTextColors()
        this.#loadDefaultBorderColors()
        this.#loadDefaultforegroundColors()
        this.#loadDefaultBackgroundColors()
        return tw(({ addBase, addUtilities }) => {
            addBase({
                ...this.#rootBase(),
                ...this.#darkBase(),
            })
            addUtilities({
                ...this.#allUtilities()
            })
        }, {
            theme: {
                extend: {
                    colors: this.#extendedTheme(),
                    spacing: spacing.toTheme()
                }
            }
        })
    }

    custom() {
        return tw(({ addBase, addUtilities }) => {
            addBase({
                ...this.#rootBase(),
                ...this.#darkBase(),
            })
            addUtilities({
                ...this.#allUtilities()
            })
        }, {
            theme: {
                extend: {
                    colors: this.#extendedTheme(),
                    spacing: spacing.toTheme()
                }
            }
        })
    }

    #rootBase() {
        return {
            ':root': {
                ...this.textColor.toLight(),
                ...this.borderColor.toLight(),
                ...this.foregroundColor.toLight(),
                ...this.backgroundColor.toLight(),
            }
        }
    }

    #darkBase() {
        return {
            '.dark': {
                ...this.textColor.toDark(),
                ...this.borderColor.toDark(),
                ...this.foregroundColor.toDark(),
                ...this.backgroundColor.toDark()
            }
        }
    }

    #allUtilities() {
        return {
            ...this.textColor.toVariable(),
            ...this.borderColor.toVariable(),
            ...this.foregroundColor.toVariable(),
            ...this.backgroundColor.toVariable(),
        }
    }

    #extendedTheme() {
        const keys = this.palette.keys
        const colors = this.palette.colors()

        let colorUtilities = {}

        for (const key of keys) {
            const color = colors[key]
            const acc = Object.keys(color).reduce((acc, value) => {
                const val = this.palette.isHexColor(color[value]) ? color[value] : this.palette.rgbToString(color[value])
                return {
                    ...acc,
                    [`${this.prefix ? this.prefix + '-' : ''}${key}-${value}`]: val
                }
            }, {} as Record<string, string>)

            colorUtilities = {
                ...colorUtilities,
                ...acc
            }
        }

        return colorUtilities
    }
}