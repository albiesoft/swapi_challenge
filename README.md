Welcome to the Swapi Test
=========================

By Albert Fernandez
-------------------

I would like to explain why I choosen the frameworks that I have used and why made sense here.

### API - NESTJS

To build the API, I used NestJS. This is a Express/Fastify framework that follows loads of concepts of Angular Architecture.

Why NestJS?

NestJS is perfect to create quick servers. It is super quick to have a Express / Fastify servers. I feel it is a great solution for small servers or Micro services.

### FRONTEND - NEXTJS

For the frontend, I have choosen NextJS. This is a powerful framework for SSR React applications. It can dynamically generate the pages on runtime or create them statically. Also, with the latest version now it can generate static files dynamicly.

Why NextJS?

I guess already says why, it is the best SSR React solution right now.

### TESTING

Testing is done with Jest.

### START APP

You will need docker installed to run it through docker-compose. I done it this way so it is simple to run and test. Ideally, I would never have the API and the frontend in the same server.

I guess you know how to start up a docker compose but just in case you can run the following line:

`docker-compose up --build`

I hope you like it