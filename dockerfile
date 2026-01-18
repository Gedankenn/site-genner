version: "3.9"

services:
  site:
    build: ./site
    container_name: genner_site
    restart: always
    ports:
      - "3000:3000"
    depends_on:
      - cms

  cms:
    image: strapi/strapi:latest
    container_name: genner_cms
    restart: always
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: db
      DATABASE_PORT: 5432
      DATABASE_NAME: genner
      DATABASE_USERNAME: genner
      DATABASE_PASSWORD: genner123
    volumes:
      - ./cms:/srv/app
    ports:
      - "1337:1337"
    depends_on:
      - db

  db:
    image: postgres:16
    container_name: genner_db
    restart: always
    environment:
      POSTGRES_DB: genner
      POSTGRES_USER: genner
      POSTGRES_PASSWORD: genner123
    volumes:
      - ./db:/var/lib/postgresql/data

