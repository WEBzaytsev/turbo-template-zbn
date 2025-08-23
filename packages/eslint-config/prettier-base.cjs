/** @type {import('prettier').Config} */
module.exports = {
  $schema: "https://json.schemastore.org/prettierrc.json",

  // Core formatting rules
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "lf",
  quoteProps: "as-needed",

  // Plugins (совместимы с Prettier 3)
  plugins: [
    "prettier-plugin-organize-imports", // TS/JS import order
    "prettier-plugin-tailwindcss",      // Tailwind/HeroUI class sorting
    "prettier-plugin-sort-json",        // Alphabetise keys in *.json
    "prettier-plugin-packagejson",      // Canonical order in package.json
    "prettier-plugin-sh",               // Format shell scripts / Dockerfile
    "prettier-plugin-sql",              // Format standalone *.sql files
  ],

  // Plugin‑specific tweaks
  organizeImportsSkipDestructiveCodeActions: true,

  // File‑type overrides
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      options: { tabWidth: 2 },
    },
    {
      files: "*.md",
      options: { printWidth: 80 },
    },
    {
      files: ["*.json", "*.jsonc"],
      options: { printWidth: 120 },
    },
    {
      files: "package.json",
      options: { parser: "json" },
    },
    {
      files: ["*.sql"],
      options: { printWidth: 120 },
    },
    {
      files: ["*.gql", "*.graphql"],
      options: { printWidth: 120 },
    },
  ],
};
