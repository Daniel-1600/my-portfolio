import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        "darkest-gray": "var(--darkest-gray)",
        "very-dark-gray": "var(--very-dark-gray)",
        "dark-gray-1": "var(--dark-gray-1)",
        "dark-gray-2": "var(--dark-gray-2)",
        "almost-black": "var(--almost-black)",
        "dark-gray-3": "var(--dark-gray-3)",
        "dark-gray-4": "var(--dark-gray-4)",
        "border-color": "var(--border-color)",
        "dark-gray-6": "var(--dark-gray-6)",
        "dark-gray-7": "var(--dark-gray-7)",
        "dark-gray-8": "var(--dark-gray-8)",
        "medium-dark-gray": "var(--medium-dark-gray)",
        "medium-gray": "var(--medium-gray)",
        "light-gray-1": "var(--light-gray-1)",
        "light-gray-2": "var(--light-gray-2)",
        "light-gray-3": "var(--light-gray-3)",
        "light-gray-4": "var(--light-gray-4)",
        "very-light-gray": "var(--very-light-gray)",
        "near-white": "var(--near-white)",
        "almost-white": "var(--almost-white)",
        "image-bg": "var(--image-bg)",
      },
      fontFamily: {
        "space-grotesk": "var(--font-Space_Grotesk)",
        "ibm-plex-mono": "var(--font-IBM_Plex_Mono)",
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)",
        "jetbrains-mono": "var(--font-jetbrains-mono)",
      },
      animation: {
        wave: "wave-animation 2.5s ease-in-out infinite",
      },
      keyframes: {
        "wave-animation": {
          "0%, 10%, 70%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-10deg)" },
          "40%": { transform: "rotate(12deg)" },
          "50%": { transform: "rotate(-8deg)" },
          "60%": { transform: "rotate(6deg)" },
        },
      },
    },
  },
} satisfies Config;
