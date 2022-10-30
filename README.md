# API Consumer

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 1. Getting Started

Install the project:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 2. Browser support

Next.JS [uses `Browserslist`](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-target-browsers) to configure the target browsers for PostCSS (for Autoprefixer and compiled css features).

Browserslist configuration can be found in `package.json`, and it contains 2 queries. According to [Browserslist query-composition](https://github.com/browserslist/browserslist#query-composition), queries in an array result in an `OR` operator.

To check the resulting list of browsers for a configured query we can run:

```shell
npx browserslist
```

Which returns the resulting browsers for the given query, based on the currently installed DB.

To update the DB, use:

```shell
npx browserslist --update-db
```

## 3. Developers Handbook

## 3.1 Coding Styles

For accessibility reasons, the project uses tabs over spaces: yes we also want that developers with diversity of needs can read and write code. There are other coding styles to follow, mostly coming from the defaults in Next.JS, for example: no semi-colons.

Instead of listing them all, make sure that you adhere to the different coding styles configuring your editor of choice with the following plugins:

- Editorconfig
- ESLint
- Prettier

There are configuration files for each of these tools at the root of the frontend folder.

Before committing and pushing, remember to run:

```bash
npm run prettier && npm run lint
```

They should automatically fix many of the coding styles and coding good practices, but there may be cases when they can't, they will output the errors: you should fix them before committing.

## 3.2 Editors

At the start of the project most Frontend developers in the project use WebStorm as their main Code Editor. Yet every developer in the project has also VisualStudio Code. So in this project we try to support both editors to have a good developer experience when working with them.

### WebStorm

WebStorm provides options to share configurations on a project level. This happens through files in the `.idea/` folder at the root of the frontend project.

WebStorm is providing a "required plugins" system to ensure the proper working of the project across the team. When opening the `fe` folder with WebStorm it should automatically prompt to install the required plugins.

Depending on your WebStorm version, make sure that the TypeScript version used is not the bundled one, but the one defined in the project. To do so, first install the project and afterwards go to `Settings > Languages & Frameworks > Typescript`. In there navigate to the `node_modules` folder from the project and select the `typescript` folder.

### VisualStudio Code

VSCode also offers the option to suggest extensions to be used for the project. This happens through files in the `.vscode/extensions.json` file at the root of the frontend project.

There are also some Workspace settings to enable and configure some needed plugins.
