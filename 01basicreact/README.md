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

You can use any code editor. **VS Code** is a popular choice. Download it from [VS Code Official Site](https://code.visualstudio.com/).

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
npx create-react-app my-app
```

- `npx` executes packages without installing them globally.
- `create-react-app` sets up a basic React project.

### **Why Some Developers Avoid Create-React-App?**

- It includes many unnecessary dependencies (e.g., testing libraries).
- It's slightly bulky and slow.
- Modern alternatives like **Vite** offer faster builds.

## 7. Start the React Project

Once the project is created, navigate into the directory and start the development server:

```sh
cd my-app
npm start
```

This will open **http://localhost:3000/** in your browser.
