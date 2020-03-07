FROM node

WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npx next telemetry disable
COPY . .
RUN npm run build

CMD [ "npm", "run", "start"]