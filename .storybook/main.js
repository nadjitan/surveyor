module.exports = {
  stories: [
    "../test/**/*.stories.mdx",
    "../test/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  previewHead: head => `
  ${head}
  <style>
    body {
      width: 100%;
      height: 100vh;
    }
    #root {
      width: 100%;
      height: 100%;
      display: grid;
      align-content: center;
      justify-items: center;
    }
  </style>
`,
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
}
