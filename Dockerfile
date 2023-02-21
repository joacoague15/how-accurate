FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 5000

CMD [ "npm", "start" ]

RUN npm run build

RUN npm install -g serve
CMD serve -s build
