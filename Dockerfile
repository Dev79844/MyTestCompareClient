FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install


# Bundle app source
COPY . .

RUN npm run build

EXPOSE 80
EXPOSE 443

CMD [ "npm", "start" ]