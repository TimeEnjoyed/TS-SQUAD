FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install next@latest \
 && npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]