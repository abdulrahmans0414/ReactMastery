# Vite + React Project Setup

This guide walks you through setting up a Vite + React project and highlights the differences between Vite and Create React App (CRA).

## Steps to Create a Vite + React Project

### 1. Run the Vite Command:

Use the following command to initialize a new Vite project:

```bash
npm create vite@latest
```

### 2. Name Your Project:

When prompted, provide a name for your project (e.g., `01vitereact`).

### 3. Select Framework:

Use the arrow keys to choose **React** as your framework.

### 4. Choose Variant:

Select either **JavaScript** or **TypeScript**. For broader accessibility, choose **JavaScript**.

### 5. Navigate to Your Project Folder:

Move into the project directory:

```bash
cd 01vitereact
```

### 6. Install Dependencies:

Run the following command to install all the dependencies listed in the `package.json` file:

```bash
npm install
```

### 7. Start the Development Server:

Run the following command to start the Vite development server:

```bash
npm run dev
```

Your app will be available at the provided local URL (e.g., `http://localhost:5173`).

---

## Key Differences Between Vite and Create React App (CRA)

| Feature                  | Vite                                                  | Create React App (CRA)              |
| ------------------------ | ----------------------------------------------------- | ----------------------------------- |
| **Speed**                | Faster due to ES modules and modern tools             | Slower due to traditional bundling  |
| **Installation Process** | Scaffolds project only; requires manual `npm install` | Automatically installs dependencies |
| **Flexibility**          | Supports React, Vue, Svelte, and more                 | React-specific                      |
| **Project Structure**    | Minimal and modern                                    | More boilerplate code               |

---

## Why Use Vite?

- **Faster Development**: Vite leverages ESBuild for rapid bundling and Hot Module Replacement (HMR).
- **Lightweight**: Provides a lean starting point without unnecessary bloat.
- **Framework Agnostic**: Works with React, Vue, Svelte, or plain JavaScript.
