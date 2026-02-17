import browser from "eslint-config-neon/browser";
import common from "eslint-config-neon/common";
import react from "eslint-config-neon/react";
import node from "eslint-config-neon/node";
import next from "eslint-config-neon/next";
import prettier from "eslint-config-neon/prettier";
import edge from "eslint-config-neon/edge";
import typescript from "eslint-config-neon/typescript";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const config = [
  {
    ignores: ["eslint.config.mjs", "node_modules/**", "dist/**"],
  },
  ...common,
  ...browser,
  ...node,
  ...typescript,
  ...react,
  ...next,
  ...edge,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "react-refresh/only-export-components": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...prettier,
  pluginPrettierRecommended,
];

export default config;
