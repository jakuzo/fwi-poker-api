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

## Database Schema / Normalization
At this time, the schema only contains a single table (for the sake of the exercise) and only follows 1NF.

However, if we moved toward a more normalized/optimal schema I think below would do


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

