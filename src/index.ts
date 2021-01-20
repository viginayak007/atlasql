/**
 * Server starts from here  
 * 
 */
import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";

//ports
const port  = process.env.PORT || 5000;

//resolvers
import { UserResolver } from './resolvers/UserResolvers';
//common
import { DepartmentResolvers } from './resolvers/Common/DepartmentResolvers';
import { RoleResolvers } from './resolvers/Common/RoleResolvers';
import { GradeResolvers } from './resolvers/Common/GradeResolvers';
import { EmployeeTypeResolvers } from './resolvers/Common/EmployeeTypeResolvers';
//onBoarding
import { BasicInformationResolvers } from './resolvers/OnBoarding/BasicInformationResolvers';
(async ()=>{
    
    //init express app
    const app = express()
    //connecting to the database
    await createConnection()
    
    //testing
    app.get('/',(_,res)=>{
        res.send('Res. send')
    })

    const apolloServer = new ApolloServer({
        tracing: true,
        schema : await buildSchema({
        
           resolvers : [
                UserResolver, 
                DepartmentResolvers,
                RoleResolvers,
                GradeResolvers,
                EmployeeTypeResolvers,
                BasicInformationResolvers

            ]
       }),
       context : ({ res, req }) => ({ res, req })
    });

    //applying middleware on apollo server
    apolloServer.applyMiddleware({app})

    //listen
    app.listen(port, ()=>{
        console.log(`GraphQL is running on port ${port}`)
    })

})();
