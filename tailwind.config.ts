import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        /* PER5 Brand v1.0 */
        amber:    { DEFAULT: '#C08459', light: '#D4A07A', dark: '#96653E', pale: '#F5E8D8' },
        terra:    '#1A1310',
        mid:      '#231A16',
        madeira:  '#3E3632',
        pedra:    '#6B5C52',
        fumo:     '#8A7A6E',
        areia:    { DEFAULT: '#F4EDE6', dark: '#EAE0D8' },
        /* Shadcn tokens */
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:    { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary:  { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted:      { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent:     { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive:{ DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        card:       { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover:    { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body:    ['Instrument Sans', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(44px,5.5vw,80px)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'section': ['clamp(32px,4vw,52px)',   { lineHeight: '1.1',  letterSpacing: '0.01em' }],
      },
      boxShadow: {
        'sm-terra': '0 2px 8px rgba(26,19,16,0.10)',
        'md-terra': '0 6px 24px rgba(26,19,16,0.14)',
        'lg-terra': '0 16px 48px rgba(26,19,16,0.18)',
        'amber':    '0 4px 16px rgba(192,132,89,0.28)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        glowPulse: {
          from: { opacity: '0.6', transform: 'translateY(-50%) scale(1)' },
          to:   { opacity: '1',   transform: 'translateY(-48%) scale(1.1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'glow-pulse':     'glowPulse 6s ease-in-out infinite alternate',
      },
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
