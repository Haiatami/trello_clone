# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your backend will run
EXPOSE 3000

# Start the backend server
CMD [ "npm", "run", "start:dev" ]
# Build the application
RUN npm run start:dev

# Set the environment variables
ENV NODE_ENV=production
ENV PORT=8000

# Run the application
CMD [ "node", "dist/index.js" ]
