import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typing: {
          '0%':{width: '0'},
          '100%':{width: '100%'}
        },
        blink: {
          '0%, 100%': {'border-color':'transparent'},
          '50%' : {'border-color':'black'}
        }
      },
      animation:{
        type: 'typing 3.5s steps(40, end), blink 0.75s step-end infinite'
      }
    },
  },
  plugins: [],
}
export default config
