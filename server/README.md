# Job Board API Server

This is the backend server for the Shomvob Job Board application. It is built with Node.js, Express, and MongoDB. It provides a RESTful API for managing jobs, applications, and users.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Running with Node.js](#running-with-nodejs)
  - [Running with Docker](#running-with-docker)
- [API Endpoints](#api-endpoints)
- [Database Schemas](#database-schemas)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Nodemon](https://www.npmjs.com/package/nodemon) should be installed globally to run the dev server: `npm install -g nodemon`

### Installation

1.  **Clone the repository**

    ```sh
    git clone https://github.com/mabuhanifa/shomvob-fullstack
    cd shomvob-fullstack/server
    ```

2.  **Install dependencies**

    ```sh
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the `/server` directory and add the necessary environment variables. See the [Environment Variables](#environment-variables) section for details.

## Environment Variables

Create a `.env` file in the root of the `server` directory with the following variables.

```properties
# MongoDB connection string
# For local MongoDB instance without Docker
# MONGO_URI='mongodb://localhost:27017/shomvob'

# For Docker Compose setup (connecting from local machine)
MONGO_URI='mongodb://root:password@localhost:27017/shomvob?authSource=admin'

# Node environment
NODE_ENV=development

# Port for the server
PORT=5000

# JWT Secret for token generation
JWT_SECRET=some_super_secret_key_for_jwt_12345
```

**Note:** When running the server inside a Docker container managed by Docker Compose, the application container will connect to MongoDB using the service name `mongodb` as the host. If you were to provide an `.env` file to the container, the `MONGO_URI` would be `mongodb://root:password@mongodb:27017/shomvob?authSource=admin`.

## Usage

You can run the server using Node.js directly or with Docker.

### Running with Node.js

To start the server in development mode (with hot-reloading via nodemon), run:

```sh
npm run dev
```

Ensure you have a `dev` script in your `package.json`, for example: `"dev": "nodemon src/index.js"`.

To start the server in production mode:

```sh
npm start
```

The server will be running on `http://localhost:5000`.

### Running with Docker

This is the recommended way to run the application for a consistent development environment, as it includes the MongoDB database.

1.  **Start the services in development mode**
    This command will start the services and stream logs to your terminal.
    From the `/server` directory, run:

    ```sh
    docker-compose up
    ```

2.  **Start the services in detached mode (in the background)**

    ```sh
    docker-compose up -d
    ```

    This command will start the Node.js server, a MongoDB instance, and Mongo Express.

    - **API Server**: `http://localhost:5000`
    - **MongoDB**: `mongodb://localhost:27017`
    - **Mongo Express**: `http://localhost:8081` (Web-based MongoDB admin interface)

3.  **To stop the services**
    ```sh
    docker-compose down
    ```

## Seeding the Database

The project includes a seeder script to populate the database with initial data.

### With NPM

To import data:

```sh
npm run data:import
```

To destroy data:

```sh
npm run data:destroy
```

### With Docker

Ensure the containers are running (`docker-compose up -d`).

To import data into the Docker container's database:

```sh
docker-compose exec api-server node seeder
```

To destroy data in the Docker container's database:

```sh
docker-compose exec api-server node seeder -d
```

## API Endpoints

The server exposes the following RESTful endpoints:

- **Jobs**: `/api/jobs`

  - `GET /`: Get all jobs (supports filtering via query params: `keyword`, `location`, `jobType`, `workType`)
  - `GET /:id`: Get a single job by ID
  - `POST /`: Create a new job (Admin only)
  - `PUT /:id`: Update a job (Admin only)
  - `DELETE /:id`: Delete a job (Admin only)

- **Applications**: `/api/applications`

  - `POST /`: Submit a new job application
  - `GET /job/:jobId`: Get all applications for a specific job (Admin only)

- **Users**: `/api/users`
  - `POST /login`: Authenticate a user and get a token
  - `POST /register`: Register a new user

## Database Schemas

The application uses Mongoose to model the data. Here are the main schemas:

- **Job**: Represents a job posting.

  - `title`: String, required
  - `company`: String, required
  - `location`: String, required
  - `description`: String, required (short description)
  - `fullDescription`: String, required (long description)
  - `jobType`: String (e.g., "Full-time", "Part-time")
  - `workType`: String (e.g., "Remote", "On-site")
  - `salary`: String
  - `applicants`: Array of Application ObjectIDs

- **User**: Represents a user (admin or applicant).

  - `name`: String, required
  - `email`: String, required, unique
  - `password`: String, required
  - `isAdmin`: Boolean, default `false`

- **Application**: Represents a job application.
  - `jobId`: ObjectID, ref 'Job', required
  - `name`: String, required
  - `email`: String, required
  - `resume`: String, required (link to resume)
