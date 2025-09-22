## FEATURES :

1. AUTHENTICATION , LOGIN , SIGN UP : 1/2 day

2. HOME PAGE : 1 day
3. ADMIN : 1 day
4. DASHBOARD :
   POST feature : 1 day
   PROFILE feature : 1 day
   USER -> birthday , aniversery , and other : 1/2 day

overall : 7 to 8 days (include ui and all !!)

## WINDOW COMMAND :

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

POSTGRESQL PASSCODE : b8b62f9b0ffb460c9b228589a4b486d8

choco install postgresql
psql --version

psql -U postgresql -h localhost -p 5432

CREATE USER "user" WITH PASSWORD "password"

here are some basic commands :

\l : list databases
\c dbname : connect with datbase
\dt : list all the relations
\du : list users and roles
\q : exit from the database

## PRISMA INSTALLATION :

npm install prisma --save-dev
npm install @prisma/client

npx prisma init

npx prisma generate
npx prisma db push
