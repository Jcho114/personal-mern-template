# Dockerfile for express server

# Build express server
FROM node:alpine3.18

# Working directory is app
WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files to app folder
COPY . .

# Container listens on port 3001
EXPOSE 3001

# Start express server
CMD ["npm", "start"]