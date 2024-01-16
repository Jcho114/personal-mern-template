# Dockerfile for react client

# Build react client
FROM node:alpine3.18

# Working directory is app
WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files to app folder
COPY . .

# Container listens on port 3000
EXPOSE 3000

# Start react client
CMD ["npm", "run", "dev"]