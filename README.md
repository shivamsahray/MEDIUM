# Medium Blogging Website

This is a full-stack blogging website built with React, Node.js, and Prisma.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)

## Features

- User authentication (signup and signin)
- Create, read, update, and delete blog posts
- View all blog posts
- View a single blog post by its ID

## Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Hono, Prisma, PostgreSQL
- **Common:** Zod for validation

## Project Structure

The project is divided into three main directories:

- `frontend`: Contains the React frontend application.
- `backend`: Contains the Node.js backend server with Hono and Prisma.
- `common`: Contains shared code between the frontend and backend, such as validation schemas.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shivamsahray/medium.git](https://github.com/shivamsahray/medium.git)

2. **Install frontend dependencies:**

```Bash

cd frontend
npm install
Install backend dependencies:

Bash

cd ../backend
npm install
Usage
Start the frontend development server:

Bash

cd frontend
npm run dev
Start the backend server:

Bash

cd ../backend
npm run dev
Database Schema
The database schema is defined in backend/prisma/schema.prisma. It consists of two models: User and Post.

User Model
Field	Type	Description
id	String	Unique identifier for the user (UUID)
email	String	User's email address (unique)
name	String	User's name (optional)
password	String	User's password
posts	Post[]	List of posts by the user

Export to Sheets
Post Model
Field	Type	Description
id	String	Unique identifier for the post (UUID)
title	String	Title of the post
content	String	Content of the post
published	Boolean	Whether the post is published or not (default: false)
author	User	The author of the post
authorId	String	Foreign key for the author

Export to Sheets
API Endpoints
The backend API endpoints are defined in backend/src/routes/.

User Routes (/api/v1/user)
POST /signup: Create a new user.

POST /signin: Log in a user.

Blog Routes (/api/v1/blog)
POST /: Create a new blog post.

PUT /: Update a blog post.

GET /bulk: Get all blog posts.

GET /:id: Get a single blog post by its ID.
