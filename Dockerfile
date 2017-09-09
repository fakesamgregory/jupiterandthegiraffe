# use a node base image
FROM node:boron

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

# tell docker what port to expose
EXPOSE 4200

CMD [ "npm", "start" ]
