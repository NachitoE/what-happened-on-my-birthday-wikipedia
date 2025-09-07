# 📰 What Happened On My Birthday?

> A beautiful vintage-style web application that reveals fascinating historical events from your birthday using Wikipedia data.

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- 🗓️ **Date Selection**: Choose any month and day to explore
- 📜 **Historical Events**: Discover random events that happened on your special day
- 🎨 **Vintage Design**: Beautiful newspaper-inspired UI with organic textures
- ⚡ **Fast Loading**: Built with Vite for lightning-fast development and production builds
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🔄 **Smart Caching**: Prevents unnecessary API calls for better performance

## 🎯 Demo

[What Happened On My Birthday?](https://nachitoe.github.io/what-happened-on-my-birthday-wikipedia/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NachitoE/what-happened-on-my-birthday-wikipedia.git
   cd what-happened-on-my-birthday-wikipedia
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom vintage themes
- **API**: [On This Day API](https://byabbe.se/on-this-day/) for historical events
- **State Management**: React Hooks (useState, useEffect)
- **Package Manager**: pnpm

## 🎨 Design Philosophy

The application features a **vintage newspaper aesthetic** with:

- 📰 Organic paper textures and vintage color palette
- 🖋️ Serif typography for classical elegance
- ✨ Subtle animations and hover effects
- 🎭 Hand-crafted irregular borders and rotations
- 🌟 Multiple layered shadows for depth

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with vintage background
│   └── NumberSelector.tsx  # Custom date picker component
├── main.tsx               # Application entry point
├── index.css             # Global styles and Tailwind directives
└── ...
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🌟 Key Components

### NumberSelector

A beautifully styled select component that:

- Automatically adjusts days based on selected month
- Handles leap years and month-specific day limits
- Features vintage styling with organic borders

### Layout

The main layout component providing:

- Multi-layered vintage paper textures
- Responsive design with sticky footer
- Elegant separator lines

## 🚀 Building for Production

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [On This Day API](https://byabbe.se/on-this-day/) for providing historical event data

---

<div align="center">
  <p>Made with ❤️ and a passion for history</p>
  <p>⭐ Star this repo if you found it interesting!</p>
</div>
