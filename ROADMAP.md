# Roadmap

Simple React todo app built while learning state management, component architecture, and project workflow.

## Stage 1: Core functionality (MVP)
- [x] Scaffold project with Vite
- [x] Add basic todo state (add item)
- [x] Add remove todo functionality
- [ ] Add toggle done status
- [ ] Split into TodoForm, TodoItem, TodoList components

## Stage 2: Persistence & UX
- [ ] Persist todos to localStorage
- [ ] Add edit todo text (double-click to edit)
- [ ] Add keyboard support (Enter to add, Esc to cancel edit)
- [ ] Prevent adding empty/whitespace todos (with feedback)

## Stage 3: Filters & derived state
- [ ] Add filter by status (all / active / completed)
- [ ] Add items counter (X of Y completed)
- [ ] Add "clear completed" button

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