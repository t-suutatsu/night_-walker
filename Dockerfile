FROM node:10.16.3-alpine
RUN npm install -g yarn

RUN mkdir -p /app
COPY ./ /app
WORKDIR /app

ENV HOST 0.0.0.0
EXPOSE 3000

RUN yarn
CMD ["yarn", "dev"]
