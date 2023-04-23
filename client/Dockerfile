# Docker File Node 19
FROM node:19-alpine3.16
ENV NODE_ENV=production

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies and clean the cache using pnpm
RUN npm install -g pnpm && pnpm install --production
RUN pnpm add sharp
# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Build
RUN pnpm build

# Start the application
CMD [ "pnpm", "start" ]