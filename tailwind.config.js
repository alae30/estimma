module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Moroccan terracotta
        primary: {
          DEFAULT: "#C4622D", // primary-500
          50: "#FDF4F0", // primary-50
          100: "#FBEAE0", // primary-100
          200: "#F5D0B8", // primary-200
          300: "#EFB690", // primary-300
          400: "#E99C68", // primary-400
          500: "#C4622D", // primary-500
          600: "#A04F24", // primary-600
          700: "#7C3C1B", // primary-700
          800: "#582912", // primary-800
          900: "#341609", // primary-900
        },
        // Secondary Colors - Mediterranean blue
        secondary: {
          DEFAULT: "#2B5797", // secondary-500
          50: "#F0F4FA", // secondary-50
          100: "#E1E9F5", // secondary-100
          200: "#C3D3EB", // secondary-200
          300: "#A5BDE1", // secondary-300
          400: "#87A7D7", // secondary-400
          500: "#2B5797", // secondary-500
          600: "#234679", // secondary-600
          700: "#1B355B", // secondary-700
          800: "#13243D", // secondary-800
          900: "#0B131F", // secondary-900
        },
        // Accent Colors - Golden sand
        accent: {
          DEFAULT: "#D4A574", // accent-500
          50: "#FBF8F4", // accent-50
          100: "#F7F1E9", // accent-100
          200: "#EFE3D3", // accent-200
          300: "#E7D5BD", // accent-300
          400: "#DFC7A7", // accent-400
          500: "#D4A574", // accent-500
          600: "#B8915F", // accent-600
          700: "#9C7D4A", // accent-700
          800: "#806935", // accent-800
          900: "#645520", // accent-900
        },
        // Background Colors
        background: "#FAFAF9", // warm-white
        surface: "#FFFFFF", // pure-white
        // Text Colors
        "text-primary": "#1A1A1A", // near-black
        "text-secondary": "#6B7280", // gray-500
        // Status Colors
        success: {
          DEFAULT: "#059669", // green-600
          50: "#ECFDF5", // green-50
          100: "#D1FAE5", // green-100
          200: "#A7F3D0", // green-200
          300: "#6EE7B7", // green-300
          400: "#34D399", // green-400
          500: "#059669", // green-600
          600: "#047857", // green-700
          700: "#065F46", // green-800
          800: "#064E3B", // green-900
          900: "#022C22", // green-950
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#D97706", // amber-600
          600: "#B45309", // amber-700
          700: "#92400E", // amber-800
          800: "#78350F", // amber-900
          900: "#451A03", // amber-950
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#DC2626", // red-600
          600: "#B91C1C", // red-700
          700: "#991B1B", // red-800
          800: "#7F1D1D", // red-900
          900: "#450A0A", // red-950
        },
        // Border Colors
        border: "#E5E7EB", // gray-200
        "border-focus": "#C4622D", // primary-500
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 2px rgba(196, 98, 45, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'spring': 'spring 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spring: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        '44': '44px',
      },
      minWidth: {
        '44': '44px',
      },
    },
  },
  plugins: [],
}