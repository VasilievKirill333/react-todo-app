# Roadmap

Simple React todo app built while learning state management, component architecture, and project workflow.

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
- [ ] Add basic CSS styling
- [ ] Add dark/light theme toggle
- [ ] Add animations for add/remove

## Stage 5: Architecture level-up
- [ ] Extract todo logic into a `useTodos` custom hook
- [ ] Add categories/tags for todos
- [ ] Add drag-and-drop reordering
- [ ] Add unit tests for `useTodos` hook (Vitest)

## Stage 6: Backend (optional, fullstack demo)
- [ ] Add Express backend with REST API
- [ ] Connect PostgreSQL database
- [ ] Add Docker setup

---

*Checkboxes are updated as features land — see commit history for details.*