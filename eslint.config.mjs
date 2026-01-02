import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    rules: { 
      semi: "error",
			"prefer-const": "error",
      camelcase: ["error", { properties: "never" }
      ],
      "no-multiple-empty-lines" : "error",
      "no-unused-vars" : ["error", { "varsIgnorePattern": "[iI]gnored" }]
    }, plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } 
  },
]);
