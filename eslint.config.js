import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

export default [js.configs.recommended, reactRecommended, eslintConfigPrettier];
