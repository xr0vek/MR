# Use a base Node.js image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your application listens on (e.g., 3000 for many Node.js apps)
EXPOSE 5173

# Command to run your application in development mode
CMD ["npm", "run", "dev"]