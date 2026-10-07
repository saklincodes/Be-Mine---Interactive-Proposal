# 💖 Be Mine — Interactive Date Proposal Web App

> A cute, interactive web app to ask your crush or special someone out on a date! Features playful dynamic buttons, glassmorphism design, floating animations, and an adorable celebration screen. ✨

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://be-mine-proposal-flame.vercel.app)

---

## 🌟 What is this?

Ever wanted a fun, cute, and memorable way to ask someone out on a date? **Be Mine** is a lightweight interactive web application designed to make asking your special someone playful and completely irresistible. 

When your crush clicks the **"No"** button, the text dynamically cycles through begging phrases while the **"Yes"** button grows larger and larger with every click—making it virtually impossible to say no! Once they click **"Yes"**, they are taken to a celebratory page featuring floating confetti, celebratory gifs, and cozy date vibes. 💖

---

## ✨ Key Features

- **🎨 Glassmorphism & Dark Theme UI:** Sleek card design with glowing gradients, soft backdrop blurs, and typography (`Fredoka` & `Outfit`).
- **🎮 Interactive "No" Button Logic:** Playfully changes text on every click while dynamically inflating the "Yes" button font and padding size.
- **🎉 Canvas Confetti Celebration:** Interactive HTML5 2D Canvas confetti and emoji animation on the acceptance screen.
- **📱 Fully Responsive Layout:** Fits seamlessly across all mobile devices, tablets, and desktop screens.
- **⚡ Lightweight & Fast:** Built using pure HTML5, CSS3, and Vanilla JavaScript—no heavy frameworks or complex build tools needed.
- **📦 Bundled Offline Assets:** Self-hosted local GIFs (`spooky_cute.gif` and `yes_hug.gif`) to ensure fast loading and zero broken image links.

---

## 📁 File Structure

```text
.
├── index.html       # Main date proposal landing page
├── styles.css       # Main UI design, glassmorphism card & floating background
├── script.js        # Interactive button scaling & dynamic messaging logic
├── yes_page.html    # "Yes!" acceptance celebration screen
├── yes_style.css    # Celebration page visual styling & canvas layout
├── spooky_cute.gif  # Main proposal animated gif asset
└── yes_hug.gif      # Celebration hug gif asset
```

---

## 🚀 How to Run

### Method 1: Direct Browser Launch
Simply double-click [`index.html`](file:///d:/Reels/Be%20Mine%20-%20Interactive%20Proposal/index.html) or open it directly in Chrome, Edge, Firefox, or Safari.

### Method 2: Local HTTP Server
If you're using VS Code Live Server or a Node.js local environment:

```bash
# Run using Node.js http-server
npx http-server . -p 8080
```

Then open `http://localhost:8080` in your web browser.

---

## 🛠️ Personalization & Customization

Making this project uniquely yours is simple and quick:

### 1. Custom Begging Messages
Open [`script.js`](file:///d:/Reels/Be%20Mine%20-%20Interactive%20Proposal/script.js) and edit the `messages` array with your own inside jokes or cute lines:

```javascript
const messages = [
    "Are you sure? 🥺",
    "Really sure?? 💔",
    "Don't do this to me! 😭",
    "I'll buy you your favorite treats! 🍫🍬",
    "Pookie please... 🥺❤️",
    // Add your own custom lines here!
];
```

### 2. Changing the GIFs
Replace `spooky_cute.gif` or `yes_hug.gif` with your favorite animated GIFs by replacing the files or updating the image `src` in `index.html` and `yes_page.html`.

---

## 📄 License & Sharing

This project is personal open-source software. Feel free to fork it, modify it, and share it with someone special!

---

*Crafted with ❤️ for memorable moments.*
