# Yoruverse official TailwindCSS plugin
Hey there! This is the official Yoruverse TailwindCSS plugin. You can copy, modify and use it for your own projects, don't need to credit us, but we would appreciate it if you do.

## Installation
You can download the plugin from the npm registry by running the following command:
```bash
npm install @yoruverse-js/tailwindcss
```

## Usage
You can import the plugin in your project by using the following code:
```typescript
// tailwind.config.js
import { Plugin } from '@yoruverse-js/Plugin'

const plugin = new Plugin().default()

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [plugin],
}
```

## Contributors
<a href="https://github.com/jotis1" target="_blank">
    <img src="https://github.com/jotis1.png" width="30" height="30" alt="Jotis1" style="border-radius: 15px"  />
</a>
<a href="https://github.com/8l4ckr0s3" target="_blank">
    <img src="https://github.com/8l4ckr0s3.png" width="30" height="30" alt="Jotis1" style="border-radius: 15px"  />
</a>

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.