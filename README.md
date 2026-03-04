<div align="center">

# 🚌 Unified College Bus Tracking System

### *Real-time bus tracking powered by smartphone GPS — no hardware required. *
### *Demo:* 🔗 https://cbtlive.vercel.app

<br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

<br/>

![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue?style=flat-square)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔍 Overview

The **Unified College Bus Tracking System** is a lightweight, real-time web platform that enables college students and administrators to track campus buses live — without any dedicated GPS hardware.

Instead of expensive hardware installations, the system leverages the **driver's smartphone GPS** via the browser's native Geolocation API. Location data is broadcast in real-time to all connected users through **WebSocket communication (Socket.IO)**, and displayed on a centralized dashboard accessible from any device.

> 💡 Designed to reduce student wait times, improve transport transparency, and give administrators full visibility over fleet movement — all from a web browser.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📍 **Real-Time Bus Tracking** | Live GPS coordinates updated continuously as buses move across campus |
| 📱 **Smartphone-Based GPS** | Uses the driver's mobile browser Geolocation API — no hardware needed |
| ⚡ **WebSocket Communication** | Instant, bidirectional data flow via Socket.IO for near-zero latency updates |
| 🖥️ **Unified Dashboard** | A single interface for both students (view buses) and admins (monitor fleet) |
| 💰 **Hardware-Free Solution** | Eliminates the cost and complexity of installing dedicated GPS trackers |
| 📈 **Scalable Architecture** | Built on Node.js and Express, designed to handle multiple buses and concurrent users |
| 🔒 **Role-Based Access** | Separate views and controls for drivers, students, and administrators |

---

## 📁 Project Structure

```
unified-college-bus-tracking/
│
├── public/                     # Static frontend assets
│   ├── index.html              # Student-facing tracking dashboard
│   ├── driver.html             # Driver interface (GPS broadcaster)
│   ├── admin.html              # Admin monitoring dashboard
│   ├── css/
│   │   └── style.css           # Global styles and layout
│   └── js/
│       ├── student.js          # Student dashboard logic & map rendering
│       ├── driver.js           # Geolocation capture & socket emission
│       └── admin.js            # Admin controls and fleet overview
│
├── server/
│   ├── server.js               # Main Express + Socket.IO server entry point
│   ├── routes/
│   │   └── api.js              # REST API route definitions
│   └── sockets/
│       └── busSocket.js        # Socket.IO event handlers for bus tracking
│
├── .gitignore                  # Files and folders excluded from Git
├── package.json                # Project metadata and npm dependencies
├── package-lock.json           # Locked dependency tree
└── README.md                   # Project documentation (you are here)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `v16+`
- [npm](https://www.npmjs.com/) `v8+`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/unified-college-bus-tracking.git
   cd unified-college-bus-tracking
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   > Uses `nodemon` for automatic restarts on file changes.

4. **Start the production server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## ⚙️ How It Works

```
┌─────────────────┐        WebSocket         ┌──────────────────────┐
│  Driver's Phone  │ ──── GPS Coordinates ──► │   Node.js Server     │
│  (Geolocation)  │                           │   (Socket.IO)        │
└─────────────────┘                           └──────────┬───────────┘
                                                         │
                                          Broadcasts to all clients
                                                         │
                              ┌──────────────────────────┼──────────────────────────┐
                              ▼                          ▼                          ▼
                    ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
                    │  Student View    │    │  Student View    │    │   Admin View     │
                    │  (Live Map)      │    │  (Live Map)      │    │  (Fleet Monitor) │
                    └──────────────────┘    └──────────────────┘    └──────────────────┘
```

1. The **driver opens the driver interface** on their smartphone browser.
2. The browser's **Geolocation API** continuously captures GPS coordinates.
3. Coordinates are **emitted to the server** via a Socket.IO event.
4. The server **broadcasts the location** to all connected students and admins.
5. Connected clients **update the map in real-time** without any page reload.

---

## 🗺️ Roadmap

The following enhancements are planned for future releases:

- [ ] 🗺️ **Google Maps / Leaflet Integration** — Visual map rendering with bus markers and route overlays
- [ ] ⏱️ **ETA Prediction** — Estimated arrival time based on current speed and distance
- [ ] 🔔 **Push Notifications** — Browser/mobile alerts when a bus is approaching a stop
- [ ] 🛡️ **Admin Dashboard** — Full fleet management with route assignment and history logs
- [ ] 📲 **Mobile App Version** — Native Android/iOS app using React Native for better GPS accuracy
- [ ] 🔐 **Authentication System** — Secure login for drivers, students, and administrators
- [ ] 📊 **Analytics & Reporting** — Trip history, delay reports, and usage statistics
- [ ] 🌐 **Multi-Campus Support** — Extend the system to manage buses across multiple campuses

---

## 🤝 Contributing

Contributions are what make open-source projects thrive. All contributions are warmly welcome!

### How to Contribute

1. **Fork** the repository
   ```bash
   # Click the "Fork" button at the top right of this page
   ```

2. **Clone** your forked repository
   ```bash
   git clone https://github.com/your-username/unified-college-bus-tracking.git
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** and commit them
   ```bash
   git add .
   git commit -m "feat: add your descriptive commit message"
   ```

5. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** — describe your changes clearly and link any relevant issues.

### Contribution Guidelines

- Follow consistent code style and naming conventions already present in the project.
- Write clear, descriptive commit messages (preferably using [Conventional Commits](https://www.conventionalcommits.org/)).
- Test your changes before submitting a pull request.
- Open an issue first for large feature additions or breaking changes.

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

See the [LICENSE](./LICENSE) file for the full license text.

---

## Acknowledgements

This project was built using the following open-source tools and resources:

- **[Node.js](https://nodejs.org/)** — JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** — Fast, minimalist web framework for Node.js
- **[Socket.IO](https://socket.io/)** — Real-time, bidirectional event-based communication
- **[Nodemon](https://nodemon.io/)** — Development utility for automatic server restarts
- **[MDN Web Docs — Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)** — Browser-native GPS access
- **[Shields.io](https://shields.io/)** — Badge generation for README
- **[npm](https://www.npmjs.com/)** — Node package manager

---

<div align="center">

Made with ❤️ for smarter, more transparent college transport.

⭐ If this project helped you, consider giving it a star!

</div>
