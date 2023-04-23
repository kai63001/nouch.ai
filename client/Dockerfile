# Docker File Node 19
FROM node:19.9.0-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies and clean the cache using pnpm
RUN npm install -g pnpm && pnpm install --production

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Build
RUN pnpm build

# Start the application
CMD [ "pnpm", "start" ]