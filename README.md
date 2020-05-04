# API rest with Node.js, Express, Knex and MySQL

> Notes and Tasks

## Summary
- [**prerequisites**](#block-prerequisites)
- [**Installation**](#block-installation)
- [**Suggestion**](#block-suggestion)
- [**Meta**](#block-meta)

## <div id="block-prerequisites" /> prerequisites
- **Node.js** version > 12.0
- **NPM** version > 6.0
- **Nodemon** - `npm i nodemon -D`.
- **MySQL**
- **Insomnia** _or_ **Postman** to test routes and functions

## <div id="block-installation" /> Installation
1. Clone the Repository through the terminal and navigate to the folder:
```sh
$ git clone https://github.com/joaovds/Notes_and_Tasks-backend.git
$ cd Notes_and_Tasks-backend
```

2. Install the project dependencies with:
```sh
$ npm install
```

3. Create a database called 'db_note'
```sh
$ mysql -u root -p
```
```sql
$ mysql> CREATE DATABASE db_note;
```

4. Perform knex migrations to create the tables
```sh
$ knex migrate:latest
````
**_or_**
```sh
$ npx knex migrate:latest
```
> _Obs_: _if your mysql has a password, change it in the knexfile.js file_

5. Check that the tables have been created
```sql
$ mysql> USE db_note;
$ mysql> SHOW TABLES;
```

6. Run the development server with:
```sh
$ npm start
````

### <div id="block-suggestion" /> Suggestion
Use [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.postman.com/) software to test calls and functions.

#### this api is the backend of 'Note and tasks', access the Frontend of the application [here](https://github.com/joaovds/Notes_and_Tasks-frontend).

### <div id="block-meta" /> Meta
João Victor da Silva. - jv782063@gmail.com

[Facebook](https://www.facebook.com/profile.php?id=100015450819596) - [github](https://github.com/joaovds)