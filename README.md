# Task Management System

A simple Task Management System where users can sign up, log in, and manage their tasks. This project uses React for the frontend, Node.js with Express for the backend, Sequelize with PostgreSQL for database management, and JWT for user authentication.

## Features

- **User Authentication**:

  - Sign up with name, email, and password (passwords are hashed before storage).
  - Log in using email and password with JWT for session management.

- **Task Management**:
  - Create new tasks.
  - View all tasks.
  - Edit existing tasks.
  - Soft delete tasks (tasks can be marked as deleted but not permanently removed).

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces. React allows for the creation of reusable UI components, enabling efficient development of complex applications.

- **Vite**: A build tool that offers a faster and leaner development experience compared to Create React App (CRA). Vite provides instant server start, fast Hot Module Replacement (HMR), and optimized builds.

- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development. Tailwind provides low-level utility classes that can be composed to build custom designs without writing custom CSS.

- **React Router**: A library for managing navigation and routing in React applications. It allows the creation of single-page applications with dynamic routing, making navigation seamless.

- **Axios**: A promise-based HTTP client for the browser and Node.js. Axios is used to make requests to the backend API, handling CRUD operations for tasks and user authentication.

- **SVG Icons**: Scalable Vector Graphics (SVG) icons are used to enhance the UI by providing visual indicators for actions like editing or deleting tasks.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows JavaScript to be used on the server side, enabling the creation of scalable and efficient network applications.

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Express simplifies routing, middleware handling, and server management.

- **Sequelize**: A promise-based Node.js ORM (Object-Relational Mapping) tool for working with SQL databases like PostgreSQL. Sequelize provides an intuitive API for defining models, running migrations, and querying the database.

- **PostgreSQL**: An open-source relational database management system known for its standards compliance, extensibility, and advanced data type support. PostgreSQL is used to store and manage user and task data.

- **JWT (JSON Web Token)**: A compact, URL-safe means of representing claims to be transferred between two parties. JWTs are primarily used for securely transmitting information between the frontend and backend, especially for authentication and session management.

- **bcrypt**: A password-hashing function designed for secure password storage. Bcrypt is used to hash user passwords before storing them in the database, protecting against potential security breaches.
