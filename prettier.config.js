/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    printWidth: 120,
    semi: true,
    trailingComma: "es5",
    tabWidth: 4,
    useTabs: false,
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
