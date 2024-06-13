FROM debian:stable-slim

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl unzip && \
    apt-get clean

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to the PATH
ENV BUN_INSTALL="/root/.bun"
ENV PATH="$BUN_INSTALL/bin:$PATH"

# Create app directory
WORKDIR /app

# Copy package.json and bun.lockb to app directory
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code to app directory
COPY . .

# Build the Next.js application
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["bun", "run", "start"]

