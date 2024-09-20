FROM node:20
WORKDIR /src/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD npm run dev

