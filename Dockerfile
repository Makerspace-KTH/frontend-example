#
# Build stage
#
FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true

COPY ./package.json /app/
COPY ./package-lock.json /app/
COPY . /app
RUN npm ci --production
RUN npm run build

#
# Package stage
#
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]