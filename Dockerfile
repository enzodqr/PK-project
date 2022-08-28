FROM node:16.17.0-alpine3.15 as base

# Sets the working directory of the project in /src
WORKDIR /app

# Copies the package.json and package-lock.json to get faster builds
COPY ["package.json", "package-lock.json*", "./"]

# Exposes the project in the port 3000
EXPOSE 3000

# ------- Developer Build -------
FROM base as development

ENV NODE_ENV=development

RUN npm install

COPY . ./

CMD [ "npm", "run", "dev-env" ]

# ------- Production Build -------
FROM base as production

ENV NODE_ENV=production

RUN npm ci

COPY . ./

CMD [ "npm", "start" ]