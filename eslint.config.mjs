import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  { ignores: ["**/dist/**", "**/build/**", "**/coverage/**", "**/.expo/**", "**/node_modules/**"] },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
);
