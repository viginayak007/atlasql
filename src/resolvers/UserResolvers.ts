import { Arg, Mutation, Query, Resolver,  } from 'type-graphql';
import { User } from '../entity/User';

@Resolver()
export class UserResolver{
    //TODO: get all users
    @Query(() =>  [User])
    users(){
        return  User.find();
    }

    //TODO: find one user
    @Query(() =>  User)
    user(
        @Arg('id', () => Number) id : number,
    ){
        return  User.findOne(id);
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_user(
        @Arg('firstName', () => String) firstName : string,
        @Arg('lastName', () => String) lastName : string,
        @Arg('age', () => Number) age : number,
    ){  
        try {
            //saving the data
            await User.insert({
               firstName,
               lastName,
               age

            })
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }

}
