# Table of Contents

- [Table of Contents](#table-of-contents)
- [CRUD API with Prisma, PostgreSQL, Docker, Express, and TypeScript](#crud-api-with-prisma-postgresql-docker-express-and-typescript)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
  - [Git Clone Steps](#git-clone-steps)
  - [API Endpoints](#api-endpoints)
  - [Example JSON for POST and PUT requests](#example-json-for-post-and-put-requests)
    - [POST /users](#post-users)
  - [LICENSE](#license)

# CRUD API with Prisma, PostgreSQL, Docker, Express, and TypeScript

This project is a basic CRUD API built with Express.js, Prisma ORM, PostgreSQL, and TypeScript. The database can run locally or in a Docker container, depending on availability.

## Features

- **Express.js** for API routing.
- **Prisma ORM** for database interaction.
- **PostgreSQL** as the database.
- **TypeScript** for type safety.
- **Docker Compose** to manage PostgreSQL in a container.
- Fallback logic to switch between local and Docker databases.
- **Prettier** for code formatting.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (for running the database in Docker)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Project Structure

```bash
- prisma/
  - schema.prisma
- src/
  - controllers/
  - services/
  - routes/
  - utils/
  - middlewares/
  - app.ts
- server.ts
- docker-compose.yml
- package.json
- tsconfig.json
```

## Git Clone Steps

```bash
git clone https://github.com/your-repo/crud-api-prisma-docker.git
cd crud-api-prisma-docker
npm install
```

## API Endpoints

| Method | Endpoint     | Description         | Example Request Body                                                 |
| ------ | ------------ | ------------------- | -------------------------------------------------------------------- |
| GET    | `/users`     | Get all users       | N/A                                                                  |
| GET    | `/users/:id` | Get a user by ID    | N/A                                                                  |
| POST   | `/users`     | Create a new user   | `{ "name": "John", "age": 30, "gender": "Male", "salary": 50000 }`   |
| PUT    | `/users/:id` | Update a user by ID | `{ "name": "Jane", "age": 25, "gender": "Female", "salary": 60000 }` |
| DELETE | `/users/:id` | Delete a user by ID | N/A                                                                  |

## Example JSON for POST and PUT requests

### POST /users

```json
{
  "name": "John",
  "age": 30,
  "gender": "Male",
  "salary": 50000
}
```

## LICENSE

```plaintext
MIT License

Copyright (c) 2024 Anonymous

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
