FROM node:18-alpine

ENV WATCHPACK_POLLING=true

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]

# do a serious build