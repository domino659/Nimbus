FROM node:18-alpine

WORKDIR /app

ENV WATCHPACK_POLLING=true

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]