FROM node:18-alpine as production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm run build --production

RUN npm install -g serve

# Start the web server
ENTRYPOINT ["serve", "-s", "build"]