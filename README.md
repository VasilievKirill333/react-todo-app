# React Todo App

A todo list app built step by step as a learning project — React fundamentals first, now growing into a fullstack application with its own backend, database, and authentication.

## Current Stack (Frontend)

- React
- Vite
- CSS Modules

## Planned Stack (Backend, in progress)

- Node.js + Express
- PostgreSQL
- JWT-based authentication (email + password)
- Deployment: backend on Render/Railway, frontend on Vercel

## Features

- Add, edit, remove, and toggle todos
- Persisted locally via `localStorage` (will move to a real database once the backend is connected)
- Filter by status (all / active / completed)
- Completed counter and "clear completed" action
- Light/dark theme toggle
- Collapsible sidebar navigation (Todo / Profile / Settings sections)
- Smooth add/remove animations

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── FilterButtons.jsx
│   └── Sidebar.jsx
├── hooks/
│   ├── useTodos.js    # todo state, CRUD, filtering, persistence
│   └── useTheme.js    # theme state and persistence
├── App.jsx             # layout, composes components and hooks
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

Development is tracked in stages — see [ROADMAP.md](./ROADMAP.md) for the full checklist, including the upcoming backend, authentication, and deployment stages.

## Learning Goals

This project is a hands-on exercise in:
- React state management (`useState`, `useEffect`, custom hooks)
- Lifting state up / passing data via props
- Component architecture and CSS Modules
- Git workflow and structured commits
- Building and connecting a backend (Express + PostgreSQL)
- Implementing authentication from scratch (bcrypt + JWT)
- Deploying a fullstack app