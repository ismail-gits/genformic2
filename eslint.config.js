import eslintPlugin from "@eslint/js";

export default [
  {
    ignores: ["lib/prisma/**"],
  },
  eslintPlugin.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    rules: {
      // your custom rules
    },
  },
];
