FROM node:20-alpine
WORKDIR /app

RUN ["yarn", "install"]
