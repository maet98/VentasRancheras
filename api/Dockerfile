FROM node:latest

RUN mkdir -P /usr/src/app
WORKDIR /usr/src/app
COPY ./usr/src/app

EXPOSE 8080
RUN npm install
CMD ["npm","start"]
