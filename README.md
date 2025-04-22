# PASS.ai Project Overview

This repository is a work in progress! This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Next.js is a meta-framework that sits on top of React. This adds many great features like React Server Components, server-side rendering, middleware, file-based routing. Next.js is created by Vercel. Their free plan is very generous and offers hosting, postgres database, blob storage, and more.

## Getting Started

### This project uses TypeScript, but allows for new files written in JavaScript

Environment variables are needed for:

- DATABASE_URL for your database url
- GOOGLE_CLIENT_ID for Google OAuth
- GOOGLE_CLIENT_SECRET for Google OAuth
- BETTER_AUTH_SECRET for Better Auth config
- BETTER_AUTH_URL for your project's root URL

### Starting the Project

Install all packages, generate the Prisma client, then start the development server:

```bash
# open the reepository in VS Code
# optional: install recommended  VS Code extensions for a better developer experience

code .

# install packages...if asked about React as peer dependencies, choose the --force option

npm install

# generate Prisma client for the database by building the project

npm run build

# start the development server

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Next development server.

The main entrypoint file is `app/page.tsx`. The page auto-updates as you edit the file.

### Prisma

You can use Prisma Studio to interact with your database locally. Run `npx prisma studio` to start the Studio server

### Fonts

We use [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Google Fonts. You can import fonts from the Google CDN or use local files.

## Components & Component Development

This project uses [Shadcn](https://ui.shadcn.com) with [Tailwind v4](https://tailwindcss.com) as a UI library and [Storybook](https://storybook.js.org) to develop components in isolation from the main app.

You can install new components or run the Storybook dev server:

```bash

# Install new shadcn components, use the shadcn utility. If asked about React dependencies, choose --force

npx shadcn@latest add _component name_

# To run storybook, use this script,  which will open your browser at localhost:6006

npm run storybook

```

## File and Function Naming Conventions

### All files are named using kebab-case

Example filename: use-auth-state.ts
Example filename: button.tsx

#### All React components are named using PascalCase and use .jsx or .tsx file extensions

Example filename: sign-in.tsx
Example function name: function SignIn or const SignIn

#### You can use both TypeScript and JavaScript to create new files

The project is configured with the file `tsconfig.json` with the setting `allowJs` turned on. This means that new files can be JavaScript, but TypeScript files offer type safety & checking, plus parameter auto-complete in the IDE.

CRUD operations using Prisma offer type safety and autocomplete because types are automatically generated from the Prisma schema file `prisma/schema.prisma` in the root directory.

## Learn More About Next.js

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
