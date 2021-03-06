module.exports = {
    env: {
        es2020: true,
        jest: true,
    },
    extends: [
        "standard",
        "eslint-config-prettier",
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "import",
        "react-hooks",
        "eslint-plugin-import-helpers",
    ],
    rules: {
        "prefer-destructuring": [
            "error",
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": [
            "warn",
            {
                allowArgumentsExplicitlyTypedAsAny: true,
            },
        ],
        "@typescript-eslint/camelcase": "off",
        "prettier/prettier": "off",
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/order": [
            "warn",
            { "newlines-between": "always-and-inside-groups" },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        indent: ["error", 4, { SwitchCase: 1 }],
        camelcase: 0,
        semi: ["error", "never"],
        quotes: ["error", "double"],
        "no-extra-boolean-cast": 0,
        "no-unused-vars": ["off"],
        "react/jsx-props-no-spreading": 0,
        "no-console": "error",
        "import/prefer-default-export": 0,
        "react/state-in-constructor": 0,
        "no-underscore-dangle": 0,
        "no-restricted-syntax": 0,
        "global-require": 0,
        "react/sort-comp": 0,
        "react/no-array-index-key": 0,
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/prop-types": ["error", { skipUndeclared: true }],
        "no-unused-expressions": ["error", { allowTernary: true }],
        "react/destructuring-assignment": 0,
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "max-len": ["error", { code: 120, tabWidth: 4, ignoreUrls: true }],
        "object-curly-spacing": [
            "error",
            "always",
            { arraysInObjects: false, objectsInObjects: false },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react/no-unsafe": "error",
        "require-await": "error",
        complexity: ["error", 25],
        "max-depth": ["error", { max: 3 }],
        "react-hooks/exhaustive-deps": "warn",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
    },
    globals: {
        __CLIENT__: true,
        __SERVER__: true,
        __DEV__: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            }
        },
        "react": {
            "version": "detect",
        },
    },
}
