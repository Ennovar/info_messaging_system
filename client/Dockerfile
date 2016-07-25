FROM node
EXPOSE 3000
RUN apt-get update && apt-get install -y \
    git \
  	vim
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
ADD . /client
RUN mkdir -p /client && cp -a /tmp/node_modules /client
WORKDIR /client
RUN npm run build:dll

# npm test
