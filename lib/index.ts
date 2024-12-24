import { default as tw } from 'tailwindcss/plugin'
import { textColor, borderColor, foregroundColor, backgroundColor, extendedTheme } from './variables/colors'

function rootVariables(prefix?: string) {
    return {
        ':root': {
            ...textColor.toLight(prefix),
            ...borderColor.toLight(prefix),
            ...foregroundColor.toLight(prefix),
            ...backgroundColor.toLight(prefix)
        }
    }
}

function darkVariables(prefix?: string) {
    return {
        '.dark': {
            ...textColor.toDark(prefix),
            ...borderColor.toDark(prefix),
            ...foregroundColor.toDark(prefix),
            ...backgroundColor.toDark(prefix)
        }
    }
}

function utilities(prefix?: string) {
    return {
        ...textColor.toVariable(prefix),
        ...borderColor.toVariable(prefix),
        ...foregroundColor.toVariable(prefix),
        ...backgroundColor.toVariable(prefix)
    }
}

export function plugin(prefix?: string) {
    return tw(function ({ addBase, addUtilities }) {
        addBase({
            ...rootVariables(prefix),
            ...darkVariables(prefix),
        })
        addUtilities(utilities(prefix))
    }, {
        theme: {
            extend: {
                colors: extendedTheme()
            }
        }
    })
}

console.log(utilities())