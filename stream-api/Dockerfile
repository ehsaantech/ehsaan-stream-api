FROM node:16.13.0-alpine

WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["npm", "run", "start"]
