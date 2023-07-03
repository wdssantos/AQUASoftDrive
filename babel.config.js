const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@bootstrap": "./src/bootstrap",
          "@config": "./src/config",
          "@controllers": "./src/app/controllers",
          "@models": "./src/domain/models",
          "@repositories": "./src/domain/contracts/database/repositories",
          "@routes": ["./src/app/routes"],
        },
      },
    ],
    [
      require("@babel/plugin-transform-modules-commonjs"),
      {
        strictMode: compilerOptions.strict,
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
