// Import the Config type from "tailwindcss"
import type { Config } from "tailwindcss";

// Import the "tailwindcss/plugin" package
const plugin = require("tailwindcss/plugin");

// Define the Tailwind CSS configuration
const config: Config = {
  // Specify the content paths for PurgeCSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Extend the default theme with customizations
    extend: {
      backgroundImage: {
        // Define custom background image variants
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Define a Tailwind CSS plugin
    plugin(({ addVariant, e }: any) => {
      // Add a custom variant, "sidebar-expanded"
      addVariant("sidebar-expanded", ({ modifySelectors, separator }: any) => {
        modifySelectors(
          ({ className }: any) =>
            // Modify selectors to apply the custom variant
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};

// Export the Tailwind CSS configuration
export default config;
