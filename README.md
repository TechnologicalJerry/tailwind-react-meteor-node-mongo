# Meteor + Tailwind CSS + React Boilerplate

A modern development boilerplate combining Meteor.js for the backend and React with Tailwind CSS for the frontend.

## Features

-   **Meteor.js** (v3): Fast, real-time web application framework
-   **React** (v18): Component-based UI library
-   **Tailwind CSS**: Utility-first CSS framework
-   **SSR**: Server-Side Rendering for better SEO
-   **ES6+**: Modern JavaScript syntax

## Prerequisites

-   **Node.js** (v18 or higher)
-   **MongoDB** (v5 or higher)
-   **npm** (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd meteor-tailwind-react
    ```

2.  Install Meteor globally:
    ```bash
    npm install -g meteor
    ```

3.  Install dependencies:
    ```bash
    meteor npm install
    ```

## Usage

### Development

Start the development server with hot-reload:

```bash
meteor
```

Open your browser at [http://localhost:3000](http://localhost:3000)

### Production Build

Create a production build:

```bash
meteor build --server-only --directory ../build
```

The build will be created in a folder named `build` in the parent directory.

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

## Contributing

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request