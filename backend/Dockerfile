FROM node:18.20.2-alpha
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm", "run" ,"start:dev" ]
