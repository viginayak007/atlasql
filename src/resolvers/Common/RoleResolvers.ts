import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Department } from '../../entity/Common/Department';
import { Role } from '../../entity/Common/Role';

@Resolver()
export class RoleResolvers{
    //TODO: get all users
    @Query(() =>  [Role])
    async roles(){
        try {
            return Role.find({relations:["Departments"]});
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_Role(
        @Arg('name', () => String) name : string,
        @Arg('departmentID', () => Number) departmentID : number,
    ){  
        try {
            if({departmentID : Number }){
                //get the department 
                let department = await Department.findOne(departmentID);
                //check if department exists;
                if(department){
                    //saving the data
                    await Role.insert({
                        name,
                        department
                    });
                }else{
                    throw new Error(`Department not found`)    
                }
            }else{
                throw new Error(`Department is required`)
            }
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }
}
