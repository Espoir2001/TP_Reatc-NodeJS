FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
 
COPY server/ ./server/

EXPOSE 3004

CMD [ "npm", "run", "serve" ]