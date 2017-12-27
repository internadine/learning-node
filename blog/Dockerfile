FROM node:9-alpine

WORKDIR /app

COPY . .

RUN yarn && \
    yarn global add nodemon@1.14.3 &&\
    yarn cache clean && \
    mv /app/node_modules /node_modules

EXPOSE 3000 5858

CMD ["yarn", "start"]
