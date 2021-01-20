import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, OneToMany, ObjectID, ObjectIdColumn} from "typeorm";
import { BasicInformation } from "../OnBoarding/BasicInformation";


@ObjectType()
@Entity()
export class EmployeeType extends BaseEntity{

    @ObjectIdColumn()
    _id: ObjectID;

    @Field()
    @Column({type:"varchar", length:100, unique: true})
    type: string;

    @OneToMany(() => BasicInformation, basicInformation => basicInformation.employeeType)
    basciInformation: BasicInformation[];

}
