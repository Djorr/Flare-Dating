# Flare Dating App - Backend

**Flare** is a dating app designed to help people connect based on their interests and preferences. This repository contains the backend application built using Node.js and Express.

## Table of Contents

- [Flare Dating App - Backend](#flare-dating-app---backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps to Install](#steps-to-install)
    - [Running the Application](#running-the-application)
    - [API Endpoints](#api-endpoints)
      - [Authentication](#authentication)
      - [User Management](#user-management)
      - [File Uploads](#file-uploads)
      - [Database Setup](#database-setup)
    - [License](#license)
    - [Contact](#contact)
    - [Screenshots](#screenshots)

## Features

- User authentication (registration and login)
- User profile management
- Secure password storage using bcrypt
- JWT-based session management
- File uploads for user images
- CORS support for frontend integration

## Technologies

- **Node.js** - JavaScript runtime for building scalable network applications
- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB and Node.js
- **Bcrypt** - Library to help you hash passwords
- **JWT (JSON Web Tokens)** - For secure user authentication
- **Multer** - Middleware for handling multipart/form-data, used for file uploads

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or using a cloud service)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flare-backend.git
   cd flare-backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory and set your environment variables:
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/flare
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application
To start the backend server, use the following command:

```bash
node index.js
```

or if you're using nodemon for development:
```bash
npx nodemon index.js
```
The server will start running on the specified port (default is 5000).

### API Endpoints
#### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Authenticate user and return a JWT

#### User Management
- GET `/api/users/:id` - Get user profile by ID
- PUT `/api/users/:id` - Update user profile
- DELETE `/api/users/:id` - Delete user account

#### File Uploads
- POST `/api/upload` - Upload a file (e.g., user images)

#### Database Setup
The application uses MongoDB for data storage. Ensure that your MongoDB service is running and accessible. Adjust the MONGODB_URI variable in the .env file to connect to your database.

### License
This project is licensed under the ISC License. See the LICENSE file for details.

### Contact
For any inquiries or contributions, feel free to reach out:

Email: contact@rubixstudios.nl

### Screenshots

Here are some screenshots of the Flare Dating App:

- **Login Page:**  
  ![Login Page](https://i.gyazo.com/b273ca7982ff62faa75e474c80777fa4.png)
  
- **Register Page:**  
  ![Register Page](https://i.gyazo.com/9d5fe7e9d1f6d5495f20587250e28c45.png)
  
- **Forgot Password:**  
  ![Forgot Password](https://i.gyazo.com/b5ee1f52cb651876d132ff2e394f32f7.png)
  
- **Swipe Cards:**  
  ![Swipe Cards](https://i.gyazo.com/c51729dc42e3549fa1fae9600d8723ed.png)
  
- **Messages:**  
  ![Messages](https://i.gyazo.com/391c058c5ef291e67a6959f2cf5838f0.png)
  
- **Profile:**  
  ![Profile](https://i.gyazo.com/4a1289dfd49f6ad991f46defad395a79.png)
  
- **Account Settings and Premium Settings:**  
  ![Account Settings](https://i.gyazo.com/c3ae3919d3429e4ee43277f96acae131.png)

> **Note:** Many features are not fully implemented yet; the design is mostly built. You can register and log in, as well as like and dislike profiles, but there are limited functionalities available at this time.