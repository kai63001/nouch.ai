# Docker file production for go 1.20.3
FROM golang:1.20.3-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . .

# Expose the port
EXPOSE 4000

# Build
RUN go build -o main .

# Start the application
CMD [ "./main" ]