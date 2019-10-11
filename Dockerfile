FROM node:7
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install && mv /usr/src/app/node_modules /node_modules
COPY . /usr/src/app
EXPOSE 8081
CMD [ "nodemon" ]
