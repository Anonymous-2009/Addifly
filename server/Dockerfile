# Take a base image of Node
FROM node:latest

# Initialize a working directory
WORKDIR /home/addifly-server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# npx prisma generate for database
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD [ "npm", "run", "dev" ]
