# fwi-backend-code-challenge

The Frontend code for FWI's Full Stack Developer Code Challenge.
Written in TypeScript utilizing Express.js.
Database: MySQL
Api and Database deployed using AWS.

### Currently deployed to http://44.225.53.153:3001
### Check out the live api docs at http://44.225.53.153:3001/doc

## Project Set Up

Install dependencies and start in development mode.
```sh
npm install
npm run dev
```
Note, this assumes that MySQL is installed and configured locally. See install steps below.

## Items Left to do / Room For improvement
- Hard coded db credentials
- Could utilize node env a bit better
- The swagger docs are pretty bare bones, they should have more information for response exmaples, model types, and so on.
- Schema should follow beyond 1NF and thus the model interface for players should be adjusted for the necessary joins.
- Better schema loader system.

## Database Schema / Normalization
At this time, the schema only contains a single table (for the sake of the exercise) and only follows 1NF.

![poker_db_nonorm drawio](https://user-images.githubusercontent.com/26155547/140087537-1d3982c0-64e6-42ce-b528-de1342fdb3d1.png)

However, if we moved toward a more normalized/optimal schema I think below would do.

![poker_schema_norm drawio](https://user-images.githubusercontent.com/26155547/140087457-9c8f40d7-a8d3-4c1c-95b9-66741ea7527f.png)

## MySQL install/configuration
Note, for the sake of the exercise and brevity, some details of the configuration are not
fully documented.

Install mysql using homebrew
```sh
brew install mysql
```

Start mysql service using homebrew
```sh
brew services start mysql
```

Access the mysql service and configure table and dev user:
```sh
mysql -u root
mysql> create database fwi-poker;
mysql> create user 'dev'@'localhost' identified by 'dev';
mysql> grant all on fwi-poker.* to 'dev'@'localhost';


mysql> exit
```

Sign in using the newly created user
```sh
mysql -u dev -p
Enter Password: <password> # just use password
```

I manually created the schema using MySQL workbench but you can create the tables using the shell as well.

