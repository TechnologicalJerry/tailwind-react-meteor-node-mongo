# Meteor SaaS Dashboard

A modern, scalable SaaS dashboard template built with a robust, full-stack JavaScript ecosystem.

## Tech Stack

*   **Framework:** [Meteor.js](https://www.meteor.com/)
*   **Frontend:** [React](https://reactjs.org/) (v18)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Database:** MongoDB (via Meteor)

## Prerequisites

*   [Meteor](https://docs.meteor.com/install.html) installed on your system.
*   [Node.js](https://nodejs.org/en/) and npm.
*   [Docker](https://www.docker.com/) and Docker Compose (for containerized deployment).

## Getting Started

### Local Development

1.  **Install dependencies:**
    ```bash
    meteor npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    This will start the Meteor app. It should be available at `http://localhost:3000`.

### Scripts

*   `npm start`: Starts the Meteor development server.
*   `npm test`: Runs the test suite using Mocha.
*   `npm run test-app`: Runs tests in full-app mode with a watcher.
*   `npm run lint`: Runs ESLint to check for code quality and style issues.
*   `npm run visualize`: Analyzes the client bundle size.

## Docker Deployment

This application is ready to be containerized and deployed using Docker.

1.  **Build and run using Docker Compose:**
    ```bash
    docker-compose up --build
    ```
    This command will build the Meteor application image using the provided `Dockerfile` and start both the application and a MongoDB instance as defined in `docker-compose.yml`.

2.  **Access the application:**
    The application will be exposed on port `3000`. Open `http://localhost:3000` in your browser.

## Project Structure

*   `client/`: Client-side React components, styles, and entry point (`main.tsx`).
*   `server/`: Server-side logic, API endpoints, and entry point (`main.ts`).
*   `imports/`: Shared code, collections, and common utilities accessible by both client and server.
*   `Dockerfile`: Multi-stage Docker build configuration for creating a production-ready Node.js image.
*   `docker-compose.yml`: Docker Compose configuration for running the application and its MongoDB dependency.sh to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Folder Structure
```
meteor-tailwind-react/
├── client/
│   ├── main.jsx           # React entry point
│   ├── styles.css           # Tailwind CSS setup
│   └── ...
├── imports/
│   ├── api/                # Meteor methods/publications
│   ├── components/         # Reusable React components
│   └── collections/        # MongoDB collections
├── server/
│   ├── main.js              # Server entry point
│   └── publications.js      # Server publications
├── package.json             # Meteor packages
├── .gitignore
└── README.md
```