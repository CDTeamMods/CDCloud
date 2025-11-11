import globals from "globals"
import json from "@eslint/json"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default defineConfig([
  eslintConfigPrettier,
  {
    files: ["**/*.{mjs}"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
])
