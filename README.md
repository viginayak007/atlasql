# Build a Project with TypeORM
Boiler plate:

1. Install node
2. Install yarn `npm install -g yarn`
3. Install npx `npm install -g npx`
4. Install typeorm cli `npm install -g typeorm`
5. Install npm db package choose one of them mssql, mysql, postgres or mongodb package  `npm install -g mssql`
6. Create project via typeorm cli `typeorm init --name server --database mssql`
7. Go to ormconfig,json and change the below settings
   "url": "mongodb+srv://<connection_string>,
    "synchronize": <true/false>, if you want ORM to create table on database
8. Update tsconfig file `npx tsconfig.json` select node 
9. `yarn install`
10. `yarn add type-graphql`
11. Upadte pacakges using yarn `yarn upgrade-interactive --latest`
12. Add express apollo-server-express and graphql `yarn add express apollo-server-express graphql`
13. Add types to the express and graphql `yarn add -D @types/express @types/graphql`
14. Add nodemon `yarn add -D nodemon` [optional]
15. Add Axios `yarn add axios`
16. 




Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
