# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:10-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /.

# Install dependencies
COPY package*.json ./

#USER node

RUN npm install

# Copy source files from host computer to the container
COPY . .

# Build the app
#RUN npm run build

# Specify port app runs on
EXPOSE 3010

# Run the app
CMD [ "node", "server.js" ]
