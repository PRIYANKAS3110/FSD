FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm config set unsafe-perm true
RUN npm install --registry=https://registry.npmjs.org --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=60000

# Copy application source code
COPY . .

# Expose port and define the start command
EXPOSE 3000
CMD ["node", "app.js"]  # Replace with your app's entry point
