# Addifly Project

A full-stack application with React frontend, Node.js backend, and PostgreSQL database.

## Prerequisites

- Docker installed on your machine
- Docker Compose (optional but recommended)
- Git
- Node.js and npm (for local development)

## Complete Setup Guide

### 1. Clone the Repository

```bash
# Clone the project repositories
git clone https://github.com/anonymous2009/addifly-client.git client
git clone https://github.com/anonymous2009/addifly-server.git server

# For a specific branch
git clone -b main https://github.com/anonymous2009/addifly-client.git client
git clone -b main https://github.com/anonymous2009/addifly-server.git server
```

### 2. Pull Docker Images

Pull all required images from Docker Hub:

```bash
# Pull the client image
docker pull anonymous2009/client:v1

# Pull the server image
docker pull anonymous2009/server:v1

# Pull PostgreSQL image
docker pull postgres
```

### 3. Create Docker Network

Create a Docker network to enable communication between containers:

```bash
docker network create addifly -d bridge
```

### 4. Set Up Database

```bash
# Create a volume for persistent data
docker volume create addifly-data

# Run PostgreSQL container
docker run -d \
  --name database \
  --network=addifly \
  -e POSTGRES_USER=something \
  -e POSTGRES_PASSWORD=something \
  -e POSTGRES_DB=something \
  -v addifly-data:/var/lib/postgresql/data \
  postgres
```

### 5. Initialize Database Schema

Connect to the database container and run the following SQL commands:

```bash
# Connect to container
docker exec -it database psql -U something -d something

# Run these SQL commands
CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    salary DOUBLE PRECISION NOT NULL
);

CREATE TABLE "Admin" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    otp DOUBLE PRECISION NULL,
    "otpExpires" TIMESTAMP NULL
);

# Exit psql
\q
```

### 6. Run Backend Server

```bash
docker run -d \
  --name server \
  --network=addifly \
  -p 3000:3000 \
  -e DATABASE_URL=postgresql://something:something@database:5432/something \
  anonymous2009/server:v1
```

### 7. Run Frontend Client

```bash
docker run -d \
  --name client \
  --network=addifly \
  -p 5173:5173 \
  anonymous2009/client:v1
```

## Quick Setup (All Commands)

Here's all commands in sequence to get the project running:

```bash
# Clone repositories
git clone https://github.com/anonymous2009/addifly-client.git client
git clone https://github.com/anonymous2009/addifly-server.git server

# Pull images
docker pull anonymous2009/client:v1
docker pull anonymous2009/server:v1
docker pull postgres

# Create network
docker network create addifly -d bridge

# Create volume
docker volume create addifly-data

# Run database
docker run -d \
  --name database \
  --network=addifly \
  -e POSTGRES_USER=something \
  -e POSTGRES_PASSWORD=something \
  -e POSTGRES_DB=something \
  -v addifly-data:/var/lib/postgresql/data \
  postgres

# Run server
docker run -d \
  --name server \
  --network=addifly \
  -p 3000:3000 \
  -e DATABASE_URL=postgresql://something:something@database:5432/something \
  anonymous2009/server:v1

# Run client
docker run -d \
  --name client \
  --network=addifly \
  -p 5173:5173 \
  anonymous2009/client:v1
```

## Local Development Setup

If you want to run the applications locally for development:

### Client Setup
```bash
cd client
npm install
npm run dev
```

### Server Setup
```bash
cd server
npm install
npm run dev
```

## Project Structure

```
addifly/
├── client/             # Frontend React application
│   ├── src/
│   ├── public/
│   └── package.json
├── server/             # Backend Node.js application
│   ├── src/
│   ├── prisma/
│   └── package.json
└── README.md
```

## Verify Setup

### Check Network Configuration
```bash
docker network inspect addifly
```

### Check Running Containers
```bash
docker ps
```

### View Container Logs
```bash
# View server logs
docker logs server

# View client logs
docker logs client

# View database logs
docker logs database
```

## Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Troubleshooting

### Git Clone Issues
If you have issues cloning the repositories:
1. Verify your Git credentials:
   ```bash
   git config --list
   ```
2. Check if you have access to the repositories
3. Try using SSH instead of HTTPS:
   ```bash
   git clone git@github.com:anonymous2009/addifly-client.git client
   git clone git@github.com:anonymous2009/addifly-server.git server
   ```

### Database Connection Issues
1. Verify the database container is running:
   ```bash
   docker ps | grep database
   ```

2. Check database logs:
   ```bash
   docker logs database
   ```

3. Verify network connectivity:
   ```bash
   docker network inspect addifly
   ```

### Client or Server Issues
1. Check container logs:
   ```bash
   docker logs client
   docker logs server
   ```

2. Verify all containers are on the same network:
   ```bash
   docker network inspect addifly
   ```

### Image Pull Issues
If you have issues pulling the images:
1. Make sure you're logged into Docker Hub:
   ```bash
   docker login
   ```
2. Check if the images are accessible:
   ```bash
   docker search anonymous2009
   ```

## Data Persistence

The PostgreSQL data is persisted in the `addifly-data` volume. To manage the volume:

```bash
# List volumes
docker volume ls

# Inspect volume
docker volume inspect addifly-data

# Remove volume (warning: this will delete all data!)
docker volume rm addifly-data
```

## Clean Up

To completely clean up all resources:

```bash
# Stop and remove containers
docker stop client server database
docker rm client server database

# Remove network
docker network rm addifly

# Remove volume (optional - this will delete all data!)
docker volume rm addifly-data

# Remove images (optional)
docker rmi anonymous2009/client:v1
docker rmi anonymous2009/server:v1
docker rmi postgres

# Remove cloned repositories (optional)
rm -rf client server
```

## Important Notes

- The database credentials used in this setup are for demonstration purposes. In a production environment, use secure credentials and store them safely.
- Make sure ports 3000 and 5173 are available on your host machine.
- The database volume ensures data persistence between container restarts.
- Images are pulled from Docker Hub under the username `anonymous2009`

## Contributing

[Add your contribution guidelines here]

## License

[Add your license information here]