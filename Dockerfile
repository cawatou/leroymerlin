FROM node:16.14.2 as base

WORKDIR /usr/app

COPY package.json package.json
COPY yarn.lock yarn.lock
#COPY package-lock.json package-lock.json

FROM base as test
RUN yarn install
COPY . .
RUN yarn run test
RUN yarn run lint

FROM base as prod
RUN yarn install --production
COPY . .
CMD [ "node", "app.js" ]