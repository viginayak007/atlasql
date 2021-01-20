import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, OneToMany, ObjectID, ObjectIdColumn} from "typeorm";
import { BasicInformation } from "../OnBoarding/BasicInformation";

import { Role } from "./Role";

@ObjectType()
@Entity()
export class Department extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    _id: ObjectID;

    @Field()
    @Column({type:"varchar", length:100, unique: true})
    name: string;

    @OneToMany(() => Role, role => role.department)
    roles: Role[];

    @OneToMany(() => BasicInformation, basicInformation => basicInformation.department)
    basciInformation: BasicInformation[];

}
