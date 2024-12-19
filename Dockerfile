FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install 

# Copy application source code
COPY . .

# Expose port and define the start command
EXPOSE 3000
CMD ["node", "app.js"]  # Replace with your app's entry point
