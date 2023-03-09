
## Description

This is a simple CRUD micro service built with  [Nest](https://github.com/nestjs/nest)
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
**Endpoints**

- `GET /api/fileurl` - Get all fileurls
- `GET /api/fileurl/{item_id}/{app_id}/{business_id}` - Get a fileurl by item_id, app_id and business_id
- `POST /api/fileurl` - Create a fileurl
- `PUT /api/fileurl/{id}` - Updates the fileurl found by id
- `DELETE /api/fileurl/{id}` - Sets isDelete true fro the fileurl found by id


- `swagger/api` - Swagger endpoint
## Swagger
![swagger](documentation_image/swagger.png?raw=true 'swagger')

## Project Architechture

- `apps\` - contains all the micro servies. Right now, we only have one - fileurl
- `apps\fileurl\src\dto` - contains all the DTOs
- `apps\fileurl\src\prisma` - contains DB schema
- `apps\fileurl\src\util` - contains a custom validator for checking the ids to be non negative
- `apps\fileurl\src\prisma.service.ts` - contains prisma service
