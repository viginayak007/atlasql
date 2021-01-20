import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, ManyToOne, JoinColumn, Unique, OneToMany, ObjectID, ObjectIdColumn} from "typeorm";
import { BasicInformation } from "../OnBoarding/BasicInformation";
import { Department } from "./Department";

@ObjectType()
@Entity()
@Unique(['name', 'departmentID'])
export class Role extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    _id: ObjectID;

    @Field()
    @Column()
    departmentID! : number;
    @ManyToOne(() => Department, department => department.roles, {
        eager: true
    })
    @JoinColumn({name: "departmentID"})
    department: Department;

    @Field()
    @Column({type:"varchar", length:100})
    name: string;
    
    @OneToMany(() => BasicInformation, basicInformation => basicInformation.role)
    basciInformation: BasicInformation[];

}
