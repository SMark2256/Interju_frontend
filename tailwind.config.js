/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "zoom-in": {
                    "100%": { transform: "scale(2)" },
                },
                "zoom-out": {
                    "100%": { transform: "scale(1)" },
                },
            },
            animation: {
                "anim-zoom-in": "zoom-in 0.5s ease-in-out forwards",
                "anim-zoom-out": "zoom-out 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
