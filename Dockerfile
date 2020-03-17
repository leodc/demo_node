FROM node:12.16.1

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY views views
COPY server.js .

EXPOSE 8080

CMD npm start
