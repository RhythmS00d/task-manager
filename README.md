# Overview

This app is a simple Task Dashboard which consists of few widgets such as "Task Manager", "Weather", "Quote Generator" and "News".

To view the live demo: [click here](https://task-manager-eight-fawn.vercel.app)

## Features

### Task Manager

This widget allows the user to add, delete and mark as complete any task. The data persists through sessions as it is stored in the local storage.

### News

This widget displays all the latest/top headlines based on current category. Currently, the default country is 'au' and category is 'Technology'. A user can change the category from the filters. While loading, the widget shows a lazy skeleton loading state.

### Quote Generator

This widget displays a random quote fetched from a Quote API.

### Weather

This widget displays the latest weather based on the current user location. If user denies the location access, the default 'Sydney' is displayed. The user can search for a new city from the search sidebar.

## Instruction

Install all dependencies

```bash
npm install
# or
yarn install
```

Run the development server

```bash
npm run dev
# or
yarn run dev
```

Open "localhost:3000" to view the running app

## APIs Used

1. [OpenWeatherMap](https://openweathermap.org/)
2. [NewsAPI](https://newsapi.org/)
3. [Quote API](https://api-ninjas.com/api/quotes)

## Technical Choices

1. [Tailwind CSS](https://tailwindcss.com/) - I used this CSS library because it provides excellent performance and functionality. This library makes it easy to style any element without having to worry about the custom classnames and ids for each element.
2. [NextJs](https://nextjs.org/) - This react library provides excellent customization and functionality. This library makes easy to use App Router, Tests, API calls and many more.
3. [Axios](https://axios-http.com/docs/intro) - This HTTP client provides an easy functions to interact with network calls. Instead of calling 'fetch' and passing parameters, headers and other queries in a complex format, Axios uses a simple approach to call GET, POST, PUT and PATCH requests with simple syntax.
4. [Jest](https://jestjs.io/) - This library is a very well known in the Javascript world. It is used to implement tests for various HTML components/elements.
5. [React Icons](https://react-icons.github.io/react-icons/) - A excellent choice for free icons in various styles and colors.
6. [uuidv4](https://www.npmjs.com/package/uuid) - This package is used to get RFC4122 UUIDs. It provide simple use to get an unique Id.
