/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
          hover: "#BF9F30",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkBackground: "#1A202C",
        footer: {
          DEFAULT: "#8B7355",
          light: "#9C825F",
          dark: "#76624A",
        },
        testimonial: "#1A202C",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#BF9F30",
          hover: "#BF9F30",
          50: '#FDF8E7',
          600: '#D4AF37',
        },
        goldBg: {
          DEFAULT: "#F5ECD6",
          dark: "#E8D5A7",
        },
        sectionBg: {
          light: "#F5F5F5",
          dark: "#E5E5E5",
        },
        testimonialBg: {
          DEFAULT: "#1F2937",
          light: "#374151",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} 