import { Arg, Mutation, Query, Resolver } from 'type-graphql';
///
import { Department } from '../../entity/Common/Department';
import { EmployeeType } from '../../entity/Common/EmployeeType';
import { Grade } from '../../entity/Common/Grade';
import { Role } from '../../entity/Common/Role';
import { BasicInformation } from '../../entity/OnBoarding/BasicInformation';

@Resolver()
export class BasicInformationResolvers{
    //TODO: get all BasicInformations
    @Query(() =>  [BasicInformation])
    async BasicInformations(){
        
        return BasicInformation.find();
    }

    //TODO : Insert the new user
    @Mutation(() => Boolean)
    async create_BasicInformation(
        @Arg('firstName', () => String) firstName : string,
        @Arg('middleName', () => String) middleName : string,
        @Arg('lastName', () => String) lastName : string,
        @Arg('gender', () => String) gender : string,
        @Arg('dob', () => String) dob : string,
        @Arg('doj', () => String) doj : string,
        @Arg('maritalStatus', () => String) maritalStatus : boolean,
        @Arg('roleID', () => Number) roleID : number,
        @Arg('departmentID', () => Number) departmentID : number,
        @Arg('probationPeriod', () => String) probationPeriod : string,
        @Arg('employeeTypeID', () => Number) employeeTypeID : number,
        @Arg('gradeID', () => Number) gradeID : number,
        @Arg('companyEmail', () => String) companyEmail : string,
    ){  
        try {
            //check if all data exists in the assocaiated tables
            let department = await Department.findOne(departmentID);
            if(!departmentID) throw new Error(`unable to find Department with ID: ${departmentID}`);
            
            let role = await Role.findOne(roleID);
            if(!roleID) throw new Error(`unable to find Department with ID: ${roleID}`);
            
            let grade = await Grade.findOne(gradeID);
            if(!gradeID) throw new Error(`unable to find Department with ID: ${gradeID}`);
            
            let employeeType = await EmployeeType.findOne(employeeTypeID);
            if(!employeeType) throw new Error(`unable to find Department with ID: ${employeeTypeID}`);

            //saving the data
            await BasicInformation.insert({
               firstName,
               middleName, 
               lastName,
               gender,
               dob,
               doj,
               maritalStatus,
               role,
               department,
               probationPeriod,
               employeeType,
               grade, 
               companyEmail
            });
        } catch (error) {
            console.log(error)
            return false            
        }
        return true;
    }
}
