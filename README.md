# Agent Run Panel

This project is a React-based UI component that visualizes an AI agent run in real time. It shows tasks being executed, tool calls, intermediate outputs, retries, cancellations, and the final result.

##  How to Run Locally

1. Clone the repository:
   git clone https://github.com/GaneshRajaramMane/agent-run-panel.git

2. Go to project folder:
   cd agent-run-panel

3. Install dependencies:
   npm install

4. Start development server:
   npm run dev

---

## Switching Fixtures

Currently using a mock event stream in:
src/mock/events.js

You can modify this file to simulate:
- success run
- error run
- different task sequences

---

## Known Gaps

- No backend (mock-only implementation)
- Limited animation for transitions
- Dependency relationships are not visually represented as a graph