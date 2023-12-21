<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Simple Blog API (CRUD users, users CRUD posts)

> [nestjsx-crud](https://github.com/nestjsx/crud) [TypeORM](https://docs.nestjs.com/techniques/database#repository-pattern) [Fastify](https://github.com/fastify/fastify) REST API

Nest TypeScript starter repository with NestJs CRUD for RESTful APIs and Fastify.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```


## API Endpoints

nestjsx/crud `Crud()` decorator generates the following API endpoints:

### Get many resources

```
GET /users
GET /posts
```

_Result:_ array of resources | pagination object with data,
_Status Codes:_ 200

### Get one resource

```
GET /users/:id
GET /posts/:id
```

_Request Params:_ :id - some resource field (slug),
_Result:_ resource object | error object,
_Status Codes:_ 200 | 404

### Create one resource

```
POST /users
POST /posts
```

_Request Body:_ resource object | resource object with nested (relational) resources,
_Result:_ created resource object | error object,
_Status Codes:_ 201 | 400

### Update one resource

```
PATCH /users/:id
PATCH /posts/:id
```

_Request Params:_ :id - some resource field (slug),
_Request Body:_ resource object (or partial) | resource object with nested (relational) resources (or partial),
_Result:_ updated partial resource object | error object,
_Status codes:_ 200 | 400 | 404

### Delete one resource
```
DELETE /users/:id
DELETE /posts/:id
```

_Request Params:_ :id - some resource field (slug),
_Result:_ empty | resource object | error object
_Status codes:_ 200 | 404

## License

This repo is [MIT licensed](LICENSE).


## Related Projects

- [Refine Boilerplate for Web (PWA), Desktop and Mobile](https://github.com/josephgodwinkimani/refine-starter) — A Cross-Platform starter template for Refine.dev that utilizes the Simple REST data provider to fetch and display data from a REST API (can easily replace with graphql data provider).
- 

