import { Arg, Mutation, Query, Resolver } from 'type-graphql';
// import { createQueryBuilder } from 'typeorm';
import { Department } from '../../entity/Common/Department';

@Resolver()
export class DepartmentResolvers{
    //TODO: get all Departments
    @Query(() =>  [Department])
    async departments(){
        try {
            const desg = await Department.find();
                console.log(desg);
                return desg;
        } catch (error) {
            
        }
        return Department.find();
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_Department(
        @Arg('name', () => String) name : string,
    ){  
        try {
            //saving the data
            await Department.insert({
               name
            });
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }
}
