# Spots — Card Gallery Project

## 📖 Description

**Spots** is a responsive web application that allows users to view, add, and manage image cards in a clean, gallery-style interface.  
Built using semantic HTML, modular CSS, and vanilla JavaScript, the project demonstrates core front-end development principles such as DOM manipulation, event handling, and responsive design — with smooth user interactions and reusable UI components.

---

## ✨ Features & Functionality

### 🖼️ Card Gallery

- Displays an initial set of cards dynamically from a JavaScript array.
- Users can add new image cards with a caption via a form modal.
- Cards include interactive **like** and **delete** buttons.
- Clicking an image opens a **preview modal** with a larger view.

### 🧭 Modals & User Interactions

- Smooth open and close transitions using CSS animations.
- Modals can be closed by:
  - Clicking the close (`X`) button.
  - Clicking outside the modal (on the overlay).
  - Pressing the **Escape** key.
- The background overlay subtly signals interactivity with a pointer cursor.

### 🧩 Form Validation

- Real-time input validation with descriptive error messages.
- Submit button dynamically enables/disables based on form validity.
- Validation automatically resets when reopening modals.
- Prevents empty or invalid submissions and disables the button on load.
- BEM-based error styling for consistency and clarity.

---

## 🛠️ Technologies & Techniques Used

- **HTML5** — Semantic and accessible structure
- **CSS3** — Responsive layout using Grid and Flexbox
- **BEM methodology** — Consistent and maintainable CSS naming
- **JavaScript (ES6)** — DOM manipulation, modular logic, and event listeners
- **Responsive design** — Optimized for both desktop and mobile viewports

---

## 🎨 UX Design Highlights

- Smooth modal transitions for a polished user experience.
- Intuitive overlay closing behavior to improve accessibility.
- Validation-driven user feedback to prevent form errors.
- Modern typography, spacing, and color contrast for readability.

---

## 🚀 Deployment

You can view the live project here:  
👉 [**GitHub Pages Deployment Link**](https://ponchopetz.github.io/se_project_spots/)

---

## 📸 Screenshots

**Desktop View:**  
![Desktop View](../assets/desktop_view.png)  
<img width="1547" height="872" alt="desktop_view" src="https://github.com/user-attachments/assets/ea98514e-1304-452f-b1e0-d3c9ce7924ba" />

**Mobile View:**  
![Mobile View](../assets/mobile_view.png)  
<img width="591" height="872" alt="mobile_view" src="https://github.com/user-attachments/assets/19955e9c-c7fb-4111-9b3d-01a6df08e7a5" />

---

## 🎥 Video Demonstration

-[First Video](https://drive.google.com/file/d/1zjIXls0dZSRYrKrYzsD2qijIt3KzR_XP/view?usp=sharing)

-[Seconds video going over JavaScript](https://drive.google.com/file/d/1IM70ksil9AWjydHQoGSymoabi0hkjUYu/view?usp=sharing)

---

## 💡 Lessons Learned

- Improved understanding of **function parameter flow** and modular JavaScript architecture.
- Learned to properly structure **validation logic** using configuration objects and helper functions.
- Discovered best practices for **where to place event listeners** (inside vs. outside modal functions).
- Gained hands-on experience debugging UI behavior, CSS transitions, and event propagation.

---

## 🔮 Future Improvements

- Add local storage to persist added cards.
- Implement drag-and-drop card reordering.
- Add form accessibility features (focus trapping, ARIA roles).
- Convert repetitive JS to reusable modules for scalability.
