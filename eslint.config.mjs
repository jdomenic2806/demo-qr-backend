import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": 0,
      "no-unused-vars": 2,
      "no-undef": 2,
      "no-prototype-builtins": 2,
      "no-constant-condition": 2,
      "no-empty": 2,
      "no-irregular-whitespace": 2,
    },
  },
];