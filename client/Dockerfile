# Docker File Node 19
FROM node:19-alpine3.16
ENV NODE_ENV=production

# Set the working directory
WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Install dependencies and clean the cache using pnpm
RUN npm install -g pnpm 
RUN pnpm install


# Expose the port
EXPOSE 3000

# Build
RUN pnpm build

# Start the application
CMD [ "pnpm", "start" ]