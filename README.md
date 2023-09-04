# vuejs-blog

[Vue.js](https://vuejs.org/) blog using [DummyJSON](https://dummyjson.com/).

## Key technologies

- <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="16" alt="typescript icon" /> [TypeScript](https://www.typescriptlang.org/) 
- <img src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" width="16" alt="vue.js icon" /> [Vue.js](https://vuejs.org/)
- <img src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" width="16" alt="vue-router icon" /> [Vue Router](https://router.vuejs.org/)
- <img src="https://pinia.vuejs.org/logo.svg" width="16" alt="pinia icon" /> [Pinia](https://pinia.vuejs.org/)
- <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" width="16" alt="Tailwind CSS icon" /> [Tailwind CSS](https://tailwindcss.com/)
- <img src="https://camo.githubusercontent.com/ddc6de3917b74fcbcfde98057f891796e551b47e772168c63984c5e4aa026a96/68747470733a2f2f706f73746373732e6769746875622e696f2f6175746f70726566697865722f6c6f676f2e737667" width="16" alt="autoprefixer icon" /> [Autoprefixer](https://github.com/postcss/autoprefixer)
- <img src="https://postcss.org/assets/postcss-83d93145.svg" width="16" alt="PostCSS icon" /> [PostCSS](https://postcss.org/)
- <img src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" width="16" alt="vite icon" /> [Vite](https://vitejs.dev/)
- <img src="https://prettier.io/icon.png" width="16" alt="Prettier icon" /> [Prettier](https://prettier.io/)
- <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" width="16" alt="ESLint icon" /> [ESLint](https://eslint.org/)
- <img src="https://playwright.dev/img/playwright-logo.svg" width="16" alt="playwright icon" /> [Playwright](https://playwright.dev/)
- <img src="https://vitest.dev/logo.svg" width="16" alt="vitest icon" /> [Vitest](https://vitest.dev/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
