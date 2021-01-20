import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { EmployeeType } from '../../entity/Common/EmployeeType';

@Resolver()
export class EmployeeTypeResolvers{
    //TODO: get all users
    @Query(() =>  [EmployeeType])
    async EmployeeTypes(){
        try {
            return EmployeeType.find();
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_EmployeeType(
        @Arg('type', () => String) type : string,
    ){  
        try {
            await EmployeeType.insert({
                type                
            });
        
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }
}
