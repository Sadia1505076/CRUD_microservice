
## Description

This is a simple CRUD micro service built with  [Nest](https://github.com/nestjs/nest)

## How to setup
- Install packages
```bash
$ npm install
```
- Install xampp
- Create a MySql database
- Run the following sql to create table 'fileurl'
```bash
CREATE TABLE `fileurl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fileurl` varchar(500) NOT NULL,
  `item_id` int(11) NOT NULL,
  `module_key` varchar(200) NOT NULL,
  `app_id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `image_alt` varchar(200) DEFAULT NULL,
  `image_title` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `updatedBy` varchar(200) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `remoteAddr` varchar(200) DEFAULT NULL,
  `userAgent` varchar(200) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `sort_order` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `isDelete` tinyint(1) NOT NULL DEFAULT 0,
  `isPublish` tinyint(1) NOT NULL DEFAULT 1,
  `hitCount` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `itemId_appId_businessId_index` (`item_id`,`app_id`,`business_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci 
```
- Create .env file inside `src\` and set DATABASE_URL
```bash
DATABASE_URL="mysql://USER_NAME:PASSWORD@HOST:PORT/DB_NAE"
```
- Run
```bash
npx prisma db pull
npx prisma generate
```
You are good to go

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
