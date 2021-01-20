import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Grade } from '../../entity/Common/Grade';

@Resolver()
export class GradeResolvers{
    //TODO: get all users
    @Query(() =>  [Grade])
    async Grades(){
        try {
            return Grade.find();
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_Grade(
        @Arg('grade', () => String) grade : string,
        @Arg('description', () => String)  description: string,
    ){  
        try {
            await Grade.insert({
                grade,
                description             
            });
        
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }
}
