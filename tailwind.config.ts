import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#F1F1F1',
      'secondary': "#2B2C29",
      'standardBg': '#EBEBEB',
      'designBg': "#DFDFDF",
      'white': "#FFFFFF",
      'yellow': "#DDC384",
      'gray': "#333333",
      "transparent": "transparent",
    },
    extend: {
      backgroundImage: {
        'bg1': "url('../public/Background Images/Background1.png')",
      },
    },
  },
  plugins: [],
}
export default config
