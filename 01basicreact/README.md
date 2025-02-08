# Getting Started with React.js

## 1. Install Node.js

React requires Node.js to run. Download and install it from the [official website](https://nodejs.org/).

### **Check if Node.js is Installed**

Open a terminal or command prompt and run:

```sh
node -v
```

If Node.js is installed correctly, it will return a version number.

## 2. Install a Code Editor

Use any editor like **VS Code** ([Download](https://code.visualstudio.com/)).

## 3. Create a Project Folder

Decide where you want to create your React project. Open a terminal and run:

```sh
mkdir ReactMastery
cd ReactMastery
```

To document your project, create a `README.md` file:

```sh
touch README.md
```

Markdown (`.md`) files are useful for project documentation.

## 4. Install Git and Push Code to GitHub

Install Git from [git-scm.com](https://git-scm.com/). To track your project and push it to GitHub:

### **Initialize Git in Your Project**

```sh
git init
git add .
git commit -m "Initial commit"
```

### **Create a GitHub Repository**

1. Go to [GitHub](https://github.com/).
2. Click on **New Repository**.
3. Set repository name as **ReactMastery**.
4. Add a description: "Learning React from scratch".
5. Choose **Public** or **Private**.
6. Click **Create Repository**.

### **Connect Local Project to GitHub**

```sh
git remote add origin https://github.com/abdulrahmans0414/ReactMastery
git branch -M main
git push -u origin main
```

## 5. Setting Up a React Project

React is a minimal JavaScript library. It does not include routing, state management, or advanced build tools.

### **React Without a Framework**

You can use React directly via CDN or a bundler like **Vite** or **Parcel**. However, for a full-fledged application, frameworks like **Next.js, Gatsby, or Remix** are recommended.

## 6. Create a React App

After installing Node.js, you also get **npm (Node Package Manager)** and **npx (Node Package Executor)**.

### **Using Create-React-App**

To create a new React app, run:

```sh
npx create-react-app 01_basicreact
```

Navigate into the project folder:

```sh
cd 01_basicreact
```

Start the development server:

```sh
npm start
```

This will open **http://localhost:3000/** in your browser.

- `npx` executes packages without installing them globally.
- `create-react-app` sets up a basic React project.

### **Why Some Developers Avoid Create-React-App?**

- It includes many unnecessary dependencies (e.g., testing libraries).
- It's slightly bulky and slow.
- Modern alternatives like **Vite** offer faster builds.

## 6. Alternative to Create-React-App

Instead of `create-react-app`, you can use:

- **Vite**: Faster builds and better performance.
- **Parcel**: Lightweight bundler with zero config.
- **Next.js, Gatsby, Remix**: Frameworks with advanced features like routing.

## 7. Understanding the Setup

When using `create-react-app`, it automatically installs dependencies and configures a starter project. The main files include:

- `package.json`: Manages project dependencies.
- `src/`: Contains the source code (React components, styles, etc.).
- `public/`: Contains static assets and the main HTML file.

## 8. Project Performance and Setup Time

Even on high-performance machines, setting up a React project with `create-react-app` can take time due to dependency installation. Alternative bundlers like **Vite** offer significantly faster project setup.
