# React Blog with Appwrite Backend

This project is a simple blog built with React, using Appwrite as the backend service. It incorporates various libraries such as Redux Toolkit for state management, React Router for navigation, TinyMCE for rich text editing, HTML React Parser for rendering HTML content, and React Hook Form for form handling.

## Project Structure

- **src/components:** Contains React components for different parts of the application (e.g., blog posts, comments).
- **src/pages:** Defines pages for routing using React Router.
- **src/services:** Includes services for integrating with the Appwrite backend.
- **src/store:** Manages application state using Redux Toolkit.
- **src/utils:** Houses utility functions and helpers.

## Libraries Used

- **@reduxjs/toolkit:** Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
- **react-redux:** The official React bindings for Redux, to connect React components with the Redux store.
- **react-router-dom:** Declarative routing for React.js, to enable navigation within the application.
- **appwrite:** Appwrite is a backend service that helps you build scalable and secure applications.
- **@tinymce/tinymce-react:** A React wrapper for TinyMCE, a rich text editor that allows users to create and edit content.
- **html-react-parser:** A utility for converting HTML strings into React components.
- **react-hook-form:** A library for managing form state and validation in React applications.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install` or `yarn install`
3. Configure Appwrite backend: Set up an account on [Appwrite](https://appwrite.io/) and update the credentials in `src/services/appwrite.js`.
4. Run the project: `npm start` or `yarn start`

## Tasks and Schedule

### Day 1

- [ ] Set up the basic project structure.
- [ ] Integrate Appwrite for user authentication.

### Day 2

- [ ] Integrate Appwrite for data storage.
- [ ] Create Redux store using Redux Toolkit.
- [ ] Implement blog post listing using React components.
- [ ] Add the ability to create and edit blog posts using TinyMCE for rich text editing.

### Day 3

<!-- - [ ] Implement comment functionality using React components. -->
- [ ] Set up routing with React Router.

### Day 4

- [ ] Enhance the UI with styles and responsiveness.
- [ ] Implement form handling with React Hook Form for comment submission.

### Day 5

- [ ] Test the application and fix any bugs.
- [ ] Finalize documentation and prepare for deployment.

## Contributing

Feel free to contribute by opening issues or creating pull requests.
