# Library Management API

A REST API for managing a library system, built with Node.js, Express, and MongoDB. This backend application provides endpoints for managing books and authors, designed to support a library management frontend application.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the API](#running-the-api)
- [API Documentation](#api-documentation)
  - [Books](#books)
  - [Authors](#authors)
- [Environment Variables](#environment-variables)

## Features

- CRUD operations for books and authors
- Search functionality for books
- RESTful API design
- MongoDB integration with Mongoose
- Environment variable configuration

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FelipeCattoSilva/Library-Management-API.git
   cd Library-Management-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

## Running the API

To start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

## API Documentation

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/search` | Search books by query parameters |
| GET | `/books/:id` | Get a specific book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

#### Example Book Object

```json
{
  "title": "The Great Gatsby",
  "publisher": "Scribner",
  "price": 15.99,
  "pages": "180",
  "genre": "Classic",
  "image": "https://example.com/great-gatsby.jpg",
  "blurb": "A story of wealth, love, and tragedy in the Jazz Age",
  "author": {
    "_id": "68cb17ce6b1c5b483707fee8",
    "name": "F. Scott Fitzgerald",
    "age": 44,
    "bio": "American novelist, essayist, and short story writer."
  }
}
```

### Authors

The API provides comprehensive endpoints for managing authors in the library system.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/author` | Get all authors |
| GET | `/author/:id` | Get a specific author by ID |
| POST | `/author` | Create a new author |
| PUT | `/author/:id` | Update an author by ID |
| DELETE | `/author/:id` | Delete an author by ID |

#### Author Object Format

```json
{
  "_id": "68cb17ce6b1c5b483707fee7",
  "name": "Sarah Jane Stratford",
  "age": 69,
  "bio": "Sarah-Jane Stratford is a product of both coasts of America, but is happiest in London, where she has lived for a number of years."
}
```

#### Example Requests for Author Endpoints

**1. Create a new author:**

```bash
curl -X POST http://localhost:3000/author \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sarah Jane Stratford",
    "age": 69,
    "bio": "Sarah-Jane Stratford is a product of both coasts of America, but is happiest in London, where she has lived for a number of years."
  }'
```

**Response:**
```json
{
  "message": "Author added!",
  "data": {
    "_id": "68cb17ce6b1c5b483707fee7",
    "name": "Sarah Jane Stratford",
    "age": 69,
    "bio": "Sarah-Jane Stratford is a product of both coasts of America, but is happiest in London, where she has lived for a number of years."
  }
}
```

**2. Get all authors:**

```bash
curl -X GET http://localhost:3000/author
```

**Response:**
```json
[
  {
    "_id": "68cb17ce6b1c5b483707fee7",
    "name": "Sarah Jane Stratford",
    "age": 69,
    "bio": "Sarah-Jane Stratford is a product of both coasts of America, but is happiest in London, where she has lived for a number of years."
  },
  {
    "_id": "68cb17ce6b1c5b483707fee8",
    "name": "F. Scott Fitzgerald",
    "age": 44,
    "bio": "American novelist, essayist, and short story writer."
  }
]
```

**3. Get a specific author:**

```bash
curl -X GET http://localhost:3000/author/68cb17ce6b1c5b483707fee7
```

**Response:**
```json
{
  "_id": "68cb17ce6b1c5b483707fee7",
  "name": "Sarah Jane Stratford",
  "age": 69,
  "bio": "Sarah-Jane Stratford is a product of both coasts of America, but is happiest in London, where she has lived for a number of years."
}
```

**4. Update an author:**

```bash
curl -X PUT http://localhost:3000/author/68cb17ce6b1c5b483707fee7 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sarah Jane Stratford",
    "age": 70,
    "bio": "Updated biography for Sarah Jane Stratford."
  }'
```

**Response:**
```json
{
  "name": "Sarah Jane Stratford",
  "age": 70,
  "bio": "Updated biography for Sarah Jane Stratford."
}
```

**5. Delete an author:**

```bash
curl -X DELETE http://localhost:3000/author/68cb17ce6b1c5b483707fee7
```

**Response:**
```
Author deleted!
```

### Book Queries

The API supports searching for books using query parameters. You can search by publisher, genre, or author ID.

#### Example Query Requests

**1. Search books by publisher:**

```bash
curl -X GET http://localhost:3000/books/search?publisher=Scribner
```

**Response:**
```json
{
  "message": "Book(s) found!",
  "data": [
    {
      "_id": "68cb17ce6b1c5b483707fee9",
      "title": "The Great Gatsby",
      "publisher": "Scribner",
      "price": 15.99,
      "pages": "180",
      "genre": "Classic",
      "image": "https://example.com/great-gatsby.jpg",
      "blurb": "A story of wealth, love, and tragedy in the Jazz Age",
      "author": {
        "_id": "68cb17ce6b1c5b483707fee8",
        "name": "F. Scott Fitzgerald",
        "age": 44,
        "bio": "American novelist, essayist, and short story writer."
      }
    }
  ]
}
```

**2. Search books by genre:**

```bash
curl -X GET http://localhost:3000/books/search?genre=Classic
```

**Response:**
```json
{
  "message": "Book(s) found!",
  "data": [
    {
      "_id": "68cb17ce6b1c5b483707fee9",
      "title": "The Great Gatsby",
      "publisher": "Scribner",
      "price": 15.99,
      "pages": "180",
      "genre": "Classic",
      "image": "https://example.com/great-gatsby.jpg",
      "blurb": "A story of wealth, love, and tragedy in the Jazz Age",
      "author": {
        "_id": "68cb17ce6b1c5b483707fee8",
        "name": "F. Scott Fitzgerald",
        "age": 44,
        "bio": "American novelist, essayist, and short story writer."
      }
    }
  ]
}
```

**3. Search books by author ID:**

```bash
curl -X GET http://localhost:3000/books/search?author=68cb17ce6b1c5b483707fee8
```

**Response:**
```json
{
  "message": "Book(s) found!",
  "data": [
    {
      "_id": "68cb17ce6b1c5b483707fee9",
      "title": "The Great Gatsby",
      "publisher": "Scribner",
      "price": 15.99,
      "pages": "180",
      "genre": "Classic",
      "image": "https://example.com/great-gatsby.jpg",
      "blurb": "A story of wealth, love, and tragedy in the Jazz Age",
      "author": {
        "_id": "68cb17ce6b1c5b483707fee8",
        "name": "F. Scott Fitzgerald",
        "age": 44,
        "bio": "American novelist, essayist, and short story writer."
      }
    }
  ]
}
```

#### Example Book Creation Request

To create a new book:

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "publisher": "Scribner",
    "price": 15.99,
    "pages": "180",
    "genre": "Classic",
    "image": "https://example.com/great-gatsby.jpg",
    "blurb": "A story of wealth, love, and tragedy in the Jazz Age",
    "author": "68cb17ce6b1c5b483707fee7"
  }'
```

## Environment Variables

The application uses the following environment variables:

- `MONGO_URI`: MongoDB connection string

