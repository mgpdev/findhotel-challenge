FROM mhart/alpine-node:10

RUN mkdir /app
COPY . /app/

WORKDIR /app
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]