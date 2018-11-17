# Use node 4.4.5 LTS
FROM node:4.4.5
ENV LAST_UPDATED 20160605T165400

# Copy source code
COPY . /api

# Change working directory
WORKDIR /api

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 5000

# Launch application
CMD ["npm","start"]