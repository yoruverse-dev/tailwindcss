export class SpacingVariable {
    constructor(
        public name: string,
        public value: number
    ) { }
}

export class SpacingProperty {
    constructor(
        public spacingVariables: SpacingVariable[]
    ) { }

    toTheme(prefix?: string) {
        return this.spacingVariables.reduce((acc, spacingVariable) => {
            acc[`${prefix ? `${prefix}-` : ''}${spacingVariable.name}`] = `${spacingVariable.value}px`
            return acc
        }, {})
    }
}

export const spacing = new SpacingProperty([
    new SpacingVariable('0', 0),
    new SpacingVariable('0.5', 2),
    new SpacingVariable('1', 4),
    new SpacingVariable('1.5', 6),
    new SpacingVariable('2', 8),
    new SpacingVariable('2.5', 10),
    new SpacingVariable('3', 12),
    new SpacingVariable('4', 16),
    new SpacingVariable('5', 20),
    new SpacingVariable('6', 24),
    new SpacingVariable('8', 32),
    new SpacingVariable('10', 40),
    new SpacingVariable('12', 48),
    new SpacingVariable('16', 64),
    new SpacingVariable('20', 80),
    new SpacingVariable('24', 96),
    new SpacingVariable('32', 128),
    new SpacingVariable('40', 160),
    new SpacingVariable('48', 192),
    new SpacingVariable('56', 224),
    new SpacingVariable('64', 256),
    new SpacingVariable('80', 320),
    new SpacingVariable('96', 384),
    new SpacingVariable('120', 480),
    new SpacingVariable('140', 560),
    new SpacingVariable('160', 640),
    new SpacingVariable('180', 720),
    new SpacingVariable('192', 768),
    new SpacingVariable('256', 1024),
    new SpacingVariable('320', 1280),
    new SpacingVariable('360', 1440),
    new SpacingVariable('400', 1600),
    new SpacingVariable('480', 1920),
])
