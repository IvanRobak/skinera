/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                grayCustom: '#8F8F8F',
                pinkCustom: '#FFE9F5',
                brand: {
                    50: '#FAF7F9',
                    100: '#F5E6ED',
                    200: '#EECFDC',
                    300: '#E6B8CD',
                    400: '#DFA1BE',
                    500: '#D95A89',
                    600: '#BF4475',
                    700: '#A03D66',
                },
                social: {
                    instagram: {
                        from: '#833AB4',
                        via: '#FD1D1D',
                        to: '#405DE6',
                    },
                    facebook: '#1877F2',
                    telegram: '#0088CC',
                },
            },
            boxShadow: {
                '3xl': '0 -7px 50px -20px rgba(0, 0, 0, 0.3)',
            },
            screens: {
                "md": '800px'
            },
            backgroundImage: {
                'arrow-down': "url('/components/svgs/arrow-down.svg')"
            }
        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@tailwindcss/forms'),
    ],
} 