# Codebase Rules

## 1. Coding Environment

The codebase uses the following technologies:

- NextJS
- JavaScript
- TailwindCSS

## 2. Code Implementation Guidelines

Follow these rules when writing code:

- Use early returns whenever possible to make the code more readable.
- Always use Tailwind classes for styling HTML elements; avoid using raw CSS or style tags.
- Use descriptive variable and function/const names. Event functions must be named with a "handle" prefix (e.g., `handleClick` for onClick and `handleKeyDown` for onKeyDown).
- Implement accessibility features on elements. Interactive tags should have `tabIndex="0"`, `aria-label`, keyboard event handlers (`onKeyDown`), and similar attributes.
- Use `const` arrow functions instead of standard functions (e.g., `const toggle = () => {}`).
- Do not write any comments in the code (zero comments). The codebase must be entirely self-documenting.

## 3. Next.js App Router Specifics

- This project uses Next.js 16. APIs, conventions, and file structures may differ from older versions.
- The `middleware` filename is deprecated. This project correctly uses `proxy.js` for network-boundary middleware logic.
- Avoid relying on edge middleware where possible. Verify the latest Next.js docs for any newer App Router conventions.
