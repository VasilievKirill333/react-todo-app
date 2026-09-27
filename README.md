# React Todo App

A simple todo list app built while learning React fundamentals — state management, controlled inputs, component architecture, and a standard git/commit workflow.

## Features

- Add new todo items
- (More features in progress — see [ROADMAP.md](./ROADMAP.md))

## Tech Stack

- React
- Vite

## Project Structure

```
src/
├── components/
│   └── TodoForm.jsx   # input + add button
├── App.jsx             # holds app state, composes components
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd react-todo-app
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Roadmap

Development is tracked in stages — see [ROADMAP.md](./ROADMAP.md) for the full feature checklist and current progress.

## Learning Goals

This project was built as a hands-on exercise in:
- `useState` and controlled components
- Lifting state up / passing data via props
- Splitting a UI into reusable components
- Structuring commits and project history on GitHub