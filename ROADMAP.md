# Roadmap

React todo app, evolving from a learning project into a fullstack application (React + Express + PostgreSQL + JWT auth).

## Stage 1: Core functionality (MVP)
- [x] Scaffold project with Vite
- [x] Add basic todo state (add item)
- [x] Add remove todo functionality
- [x] Add toggle done status
- [x] Split into TodoForm, TodoItem, TodoList components

## Stage 2: Persistence & UX
- [x] Persist todos to localStorage
- [x] Add edit todo text (double-click to edit)
- [x] Add keyboard support (Enter to add, Esc to cancel edit)
- [x] Prevent adding empty/whitespace todos (with feedback)

## Stage 3: Filters & derived state
- [x] Add filter by status (all / active / completed)
- [x] Add items counter (X of Y completed)
- [x] Add "clear completed" button

## Stage 4: Visual polish
- [x] Add basic CSS styling (CSS Modules)
- [x] Add sidebar navigation (Todo / Profile / Settings), collapsible
- [x] Add dark/light theme toggle
- [x] Add animations for add/remove

## Stage 5: Architecture level-up (frontend)
- [x] Extract todo logic into a `useTodos` custom hook
- [x] Extract theme logic into a `useTheme` custom hook

## Stage 6: Backend basics
- [ ] Set up Express server (project structure, basic routing)
- [ ] Set up PostgreSQL database and connection
- [ ] Design `todos` table schema
- [ ] Build CRUD REST API for todos (GET/POST/PATCH/DELETE)
- [ ] Add Swagger/API docs
- [ ] Add Dockerfile + docker-compose for backend + PostgreSQL

## Stage 7: Authentication
- [ ] Design `users` table schema
- [ ] Build registration endpoint (hash password with bcrypt)
- [ ] Build login endpoint (issue JWT)
- [ ] Add auth middleware to protect todo routes
- [ ] Scope todos to the logged-in user

## Stage 8: Connect frontend to backend
- [ ] Add login/register pages (Profile section in sidebar)
- [ ] Replace localStorage with API calls (fetch/axios) in `useTodos`
- [ ] Store JWT (e.g. in memory or httpOnly cookie) and attach to requests
- [ ] Handle loading and error states for API calls

## Stage 9: Deployment
- [ ] Deploy backend + PostgreSQL (Render or Railway)
- [ ] Deploy frontend (Vercel or Netlify)
- [ ] Set up environment variables for both environments
- [ ] Smoke test the deployed app end-to-end

## Stage 10: Extra features (post-fullstack)
- [ ] Add tags: create/manage tags, attach multiple tags to a todo
- [ ] Add drag-and-drop reordering
- [ ] Add unit tests for `useTodos` hook (Vitest)
- [ ] Add integration tests for backend routes

---

*Checkboxes are updated as features land — see commit history for details.*