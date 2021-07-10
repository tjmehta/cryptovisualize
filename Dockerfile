FROM node:v14.15.5

ARG GITHUB_KEY

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

ADD . /app

RUN npm run build

CMD npm start
