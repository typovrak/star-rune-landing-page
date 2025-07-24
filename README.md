brand icons : https://tabler.io/icons
ui css components : https://uiverse.io/

test

oh ok i'm testing it now

# Star Rune Landing Page
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/typovrak/star-rune-landing-page)

This repository contains the source code for the official landing page for **Star Rune**, an epic typing adventure game. The landing page is a fully responsive, modern web application built with Next.js and Tailwind CSS.

> You're the Last Star in Cyberspace... Type and slash through hordes of EVIL LETTERS to save the world! Learn to type as you embark on an epic adventure. Unlock new levels in game AND in life!

**Live Site:** [**starrune.net**](https://starrune.net)

## Features

*   **Dynamic and Responsive Design:** A rich, engaging user interface that looks great on all devices, from mobile phones to desktops.
*   **Interactive Components:** Features interactive elements like an auto-scrolling testimonials wall and a gameplay abilities slider to showcase the game's mechanics.
*   **Component-Based Architecture:** Built with React and organized into logical blocks and reusable components for maintainability and scalability.
*   **Kickstarter Countdown:** A real-time countdown timer for the Kickstarter campaign launch.
*   **Community Engagement:** Includes a newsletter subscription form and direct links to all social media channels.
*   **SEO Optimized:** Utilizes Next.js features for server-side rendering and static generation, with a generated `sitemap.xml` and `robots.txt` for better search engine visibility.
*   **Storybook Integration:** Components are developed and documented in isolation using Storybook for a robust development workflow.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
*   **Component Development:** [Storybook](https://storybook.js.org/)
*   **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

The codebase is organized into a modular structure to promote separation of concerns and ease of navigation.

```
.
├── app/                  # Next.js App Router: pages, layouts, and API routes
├── blocks/               # Large, section-level components for the main page
├── components/           # Reusable UI components (buttons, cards, etc.)
│   └── ui/               # Base components from shadcn/ui
├── icons/                # Custom SVG icon components
├── layouts/              # Wrappers for pages and sections
├── public/               # Static assets (images, fonts)
├── stories/              # Storybook files for component documentation
├── styles/               # Global CSS and Tailwind configuration
└── utils/                # Utility functions, types, and static data
```

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

*   Node.js (v18 or later)
*   npm, pnpm, or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/typovrak/star-rune-landing-page.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd star-rune-landing-page
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

### Running Storybook

To view and interact with the components in isolation, run Storybook:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

## Available Scripts

This project includes the following scripts defined in `package.json`:

*   `npm run dev`: Starts the Next.js development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server after a build.
*   `npm run storybook`: Starts the Storybook development server.
*   `npm run build-storybook`: Builds Storybook as a static web application.

## Contact

This project was developed by [Quinlan Stuwe](https://github.com/typovrak).

*   **Email:** [starrunecompany@gmail.com](mailto:starrunecompany@gmail.com)
*   **X/Twitter:** [@StarRuneTyping](https://x.com/StarRuneTyping)
*   **Discord:** [Join the Community](https://discord.gg/B6pFEwsejE)
