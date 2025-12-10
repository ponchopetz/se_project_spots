# Spots — Full-Stack Card Gallery Application

## 🚀 Deployment

Live Deployment:  
👉 **[GitHub Pages](https://ponchopetz.github.io/se_project_spots/)**

## 📖 Description

**Spots** is a fully interactive, responsive web application that allows users to view, add, like, and delete image cards, as well as edit their profile information and avatar — all powered by a live REST API.

The project is built using **Object-Oriented JavaScript**, **Webpack**, and a modular architecture to demonstrate real-world front-end engineering practices such as asynchronous data handling, component-based UI design, and clean separation of concerns.

---

## ✨ Features & Functionality

### 🖼️ Card Gallery (API-Driven)

- Dynamically loads cards from a remote server using a REST API.
- Users can:
  - Add new image cards.
  - Like & unlike cards.
  - Delete their own cards (with confirmation).
- Image preview modal opens on image click.

---

### 👤 User Profile Management

- Loads user profile data from the server:
  - Name
  - Bio
  - Avatar
- Users can:
  - Edit their profile information.
  - Update their avatar via a dedicated modal.
- All changes persist to the backend.

---

### 🗑️ Delete Confirmation Modal

- Users must confirm before deleting a card.
- Prevents accidental data loss.
- Displays a loading state ("Deleting…") during server communication.

---

### ⏳ Loading States & UX Feedback

- Submit buttons dynamically change to:
  - **"Saving…"**
  - **"Deleting…"**
- Prevents duplicate submissions.
- Improves perceived performance and user feedback.

---

### ✅ Form Validation

- Real-time form validation using a reusable `FormValidator` class.
- Dynamic error messages for invalid inputs.
- Submit buttons enable/disable automatically based on validity.
- Validation resets automatically when modals reopen.
- All forms validated:
  - Edit profile
  - New post
  - Edit avatar

---

### 🧭 Modals & Accessibility

- All modals support:
  - Close via **overlay click**
  - Close via **Escape key**
  - Close via **X button**
- Smooth CSS transitions for open/close animations.
- Mobile-friendly modal layouts.

---

## 🧠 Architecture & Engineering Highlights

- **Object-Oriented Programming (OOP)**
  - `Card`
  - `Section`
  - `Popup`
  - `PopupWithForm`
  - `FormValidator`
  - `Api`
- **Separation of concerns** between UI logic, API logic, and state.
- Fully asynchronous data flow using:
  - `fetch`
  - `Promise.all()`
  - `.then() / .catch() / .finally()`

---

## 🛠️ Technologies & Techniques Used

- **HTML5** — Semantic and accessible structure
- **CSS3** — Responsive layout using Grid and Flexbox
- **BEM Methodology** — Scalable and maintainable CSS architecture
- **JavaScript (ES6+)** — Classes, modules, async logic
- **Webpack** — Bundling, modular imports, production builds
- **REST API** — Full CRUD operations
- **Git & GitHub** — Feature branching and pull request workflow
- **Responsive Design** — Optimized for desktop & mobile
- **Asynchronous UI State Handling** — Loading states, error handling

---

## 🎨 UX Design Highlights

- Hover-based avatar editing on desktop.
- Always-visible avatar edit button on mobile.
- Confirmation modals for destructive actions.
- Smooth, intuitive modal transitions.
- Clear visual feedback during all async actions.

---

## 📸 Screenshots

**Desktop View:**  
<img width="1547" height="872" alt="desktop_view" src="https://github.com/user-attachments/assets/ea98514e-1304-452f-b1e0-d3c9ce7924ba" />

**Mobile View:**  
<img width="591" height="872" alt="mobile_view" src="https://github.com/user-attachments/assets/19955e9c-c7fb-4111-9b3d-01a6df08e7a5" />

---

## 🎥 Video Demonstrations

- [PROJECT PITCH](https://www.loom.com/share/ad1a94193745436992fde2f6028908a2)

---

## 💡 Lessons Learned

- Designing **true OOP front-end architectures**.
- Managing **shared state across components**.
- Implementing **safe async UX patterns** with loading states.
- Structuring **reusable form validation logic**.
- Coordinating **multiple asynchronous API calls with `Promise.all()`**.
- Debugging event propagation, modal lifecycles, and async race conditions.
- Implementing **production-grade delete confirmation workflows**.

---

## 🔮 Future Improvements

- User authentication and multi-user support.
- Persistent user sessions.
- Drag-and-drop card reordering.
- Accessibility upgrades (ARIA roles & focus trapping).
- Infinite scrolling for large card sets.
- Server-side image optimization.

---
