import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, ManyToOne, JoinColumn, ObjectID, ObjectIdColumn} from "typeorm";
import { Department } from "../Common/Department";
import { EmployeeType } from "../Common/EmployeeType";
import { Grade } from "../Common/Grade";
import { Role } from "../Common/Role";

@ObjectType()
@Entity()
export class BasicInformation extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    _id: ObjectID;

    @Field()
    @Column({type:"varchar", length:100})
    firstName: string;
    
    @Field()
    @Column({type:"varchar", length:100})
    middleName: string;

    @Field()
    @Column({type:"varchar", length:100})
    lastName: string;

    @Field()
    @Column({type:"varchar", length:7})
    gender: string;

    @Field()
    @Column({type:"datetime"})
    dob: string;

    @Field()
    @Column({type:"datetime"})
    doj: string;

    @Field()
    @Column({default: false})
    maritalStatus: boolean;


    @Field()
    @Column()
    roleID! : number;
    @ManyToOne(() => Role, role => role.basciInformation, {
        eager: true
    })
    @JoinColumn({name: "roleID"})
    role: Role;

    @Field()
    @Column()
    departmentID! : number;
    @ManyToOne(() => Department, department => department.basciInformation, {
        eager: true
    })
    @JoinColumn({name: "departmentID"})
    department: Department;

    @Field()
    @Column({type:"varchar", length:7})
    probationPeriod: string;

    @Field()
    @Column()
    employeeTypeID! : number;
    @ManyToOne(() =>EmployeeType, employeeType => employeeType.basciInformation, {
        eager: true
    })
    @JoinColumn({name: "employeeTypeID"})
    employeeType: EmployeeType;

    @Field()
    @Column()
    gradeID! : number;
    @ManyToOne(() => Grade, grade => grade.basciInformation, {
        eager: true
    })
    @JoinColumn({name: "gradeID"})
    grade: Grade;

    @Field()
    @Column({type:"varchar", length:100, unique:true})
    companyEmail: string;

}
