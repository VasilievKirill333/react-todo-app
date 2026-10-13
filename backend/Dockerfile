# Base image: Node.js LTS on a small Alpine Linux
FROM node:24-alpine

# All following commands run inside /app in the container
WORKDIR /app

# Copy only the dependency manifests first, so Docker can cache
# the npm install layer until package*.json actually change
COPY package*.json ./

# Install production dependencies only (no nodemon)
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

ENV NODE_ENV=production

# Run as the unprivileged "node" user instead of root
USER node

# Document the port the app listens on
EXPOSE 3001

CMD ["node", "src/index.js"]