FROM node:13.12-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --silent
COPY . .
CMD npm run build || true
RUN npm start