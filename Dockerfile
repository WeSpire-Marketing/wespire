# base image:
FROM node:16-alpine
# create a directory inside the docker container
RUN mkdir -p /usr/src/app
# go to this dir:
WORKDIR /usr/src/app
# copy all the app files into the conteiner (the files and directories specified in .dockerignore will not be included)
COPY ./ /usr/src/app
# install deps
RUN npm install
# open a web server port
EXPOSE 3000
# build an app:
RUN npm run build
# start the app:
CMD npm start
