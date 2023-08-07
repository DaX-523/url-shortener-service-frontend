# Stage 1
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
RUN npm install @angular/cli
COPY . /app
RUN npm run build 
# CMD [ "npm", "start" ]
EXPOSE 80

# Stage 2
FROM nginx:alpine
COPY --from=build /app/dist/url-shortener-frontend /usr/share/nginx/html

# FROM nginx:alpine
# COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY  /app/dist/url-shortener-frontend /usr/share/nginx/html