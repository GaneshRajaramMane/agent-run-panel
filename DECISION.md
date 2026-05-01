# DECISIONS

## 1. Agent Thoughts

I chose to display only the latest agent thought in the header rather than showing all thoughts. The goal was to reduce noise and keep the UI focused for a non-technical analyst. Showing all thoughts could overwhelm users. If the target user were developers, I would consider a collapsible log view.

---

## 2. Parallel Task Layout

Parallel tasks are visually grouped using a left border and a "Parallel" badge. This keeps the layout simple while still clearly communicating that tasks are running simultaneously. I avoided complex graph layouts to maintain readability.

---

## 3. Partial Outputs

I chose to display only the latest output instead of showing all intermediate outputs. This avoids duplication and keeps the UI clean. However, I indicate when data is updating to preserve the real-time feel.

---

## 4. Cancelled State

Cancelled tasks are displayed with a neutral warning style instead of an error. This reflects that cancellation is intentional (not a failure). This avoids confusing the user or reducing trust in the system.

---

## 5. Task Dependencies

Task dependencies are not explicitly visualized with arrows or graphs. Instead, I ensured that task ordering does not contradict dependencies. A more advanced version could include a dependency graph if needed.