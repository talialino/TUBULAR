module.exports = {
  env: {
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    // me retorne erro se tiver linha mto grande
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],

    // para nao obrigar a palavra this na classe
    "class-methods-use-this": "off",
    // permitir assinalar parametros
    "no-param-reassing": "off",
    // nao usar o camelcase
    camelcase: "off",
  },
};
