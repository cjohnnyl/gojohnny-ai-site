import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#DAFF00',
        'bg-dark': '#0D0D0D',
        'bg-light': '#F4F2EE',
        'text-dark': '#0D0D0D',
        'text-light': '#F4F2EE',
        muted: '#6B6B6B',
        disabled: '#2A2A2A',
        error: '#FF4D4D',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
