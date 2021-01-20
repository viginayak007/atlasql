import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, OneToMany, Unique, ObjectID, ObjectIdColumn} from "typeorm";
import { BasicInformation } from "../OnBoarding/BasicInformation";


@ObjectType()
@Entity()
@Unique(['grade', 'description'])
export class Grade extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    _id: ObjectID;

    @Field()
    @Column({type:"varchar", length:3})
    grade: string;

    @Field()
    @Column({type:"varchar", length:100})
    description: string;

    @OneToMany(() => BasicInformation, basicInformation => basicInformation.grade)
    basciInformation: BasicInformation[];

}
