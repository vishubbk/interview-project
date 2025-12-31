# 🏥 Hospital Management Frontend (Interview Project)

A modern, responsive hospital website built using **React**, **Tailwind CSS**, and **Context API**.
This project is designed for frontend interview evaluation, focusing on clean UI, routing, responsiveness, and scalable component structure.

---

## 🚀 Live Features

- ✅ Fully responsive (Mobile / Tablet / Desktop)
- 🌙 Dark & Light mode using Context API
- 🧭 Multi-page routing with React Router
- 🏥 Dedicated pages for medical services
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations using Framer Motion
- 🗺️ Google Maps integration on Contact page
- 🚑 Emergency contact highlighted at top
- ♻️ Reusable components (Navbar, Footer)

---

## 📂 Pages Included

- **Home**
  - Hero section
  - Medical departments
  - Consultants
  - Facilities
  - Emergency highlight
- **Services**
  - Card-based service listing
  - Clickable service cards with “View More”
- **Service Detail Pages**
  - Cardiology
  - Orthopedics
  - Neurology
  - Pediatrics
  - Diagnostics
- **Contact**
  - Contact form UI
  - Hospital address
  - Google Map integration

---

## 🧩 Routing Strategy

- Clean and scalable routing using `react-router-dom`
- Service cards navigate to individual service pages
- Structure allows easy future expansion (backend / API integration)

---

## 🌗 Dark Mode Implementation

- Dark mode handled using Context API:
  - `ThemeContext` stores `isDark` state
  - Navbar toggle switches theme
  - All pages respond dynamically to theme changes
- Demonstrates global state management without external libraries

---

## 🗺️ Google Maps Integration

- Integrated using iframe embed
- No API key required
- Fully responsive
- Optimized for performance

---

## 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints (`sm`, `md`, `lg`)
- Flexbox-based layouts
- Images and content adapt smoothly to screen size

---

## 🛠️ Tech Stack

- React JS
- React Router DOM
- Tailwind CSS
- Context API
- Framer Motion
- React Icons

---

## 🎯 Interview Objective

This project demonstrates:

- Frontend fundamentals
- Component-based architecture
- Routing and navigation
- State management using Context API
- Responsive UI design
- Clean and readable code structure

---

## ⚠️ Note

This is a frontend-focused interview project.
Backend, authentication, and database integration can be added in future versions.

---

## 👨‍💻 Author

**Preetabh Awasthi**
Frontend / MERN Stack Developer

---

## 📁 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Cardiology.jsx
│   ├── Orthopedics.jsx
│   ├── Neurology.jsx
│   ├── Pediatrics.jsx
│   ├── Diagnostics.jsx
│   ├── Contact.jsx
│
│── context/
│   └── ThemeContext.jsx
│
│── App.jsx
│── main.jsx
```
