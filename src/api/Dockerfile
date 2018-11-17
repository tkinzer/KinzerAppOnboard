FROM node:8.1.4-alpine
MAINTAINER [kinzer]

RUN mkdir /code
WORKDIR /code

ADD package.json /code/
RUN npm install

ADD . /code/

EXPOSE 5000

CMD [ "npm", "start" ]