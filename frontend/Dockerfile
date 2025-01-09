FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
