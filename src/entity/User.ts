
import { Field, ObjectType } from "type-graphql";
import {Entity,  Column, BaseEntity, ObjectIdColumn, ObjectID} from "typeorm";
//testing git
@ObjectType()
@Entity()
export class User extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    _id: ObjectID;

    @Field()
    @Column({type: "varchar", length:50})
    firstName: string;

    @Field()
    @Column({type: "varchar", length:50})
    lastName: string;

    @Field()
    @Column()
    age: number;

    @Field()
    @Column({default: true})
    isActive: boolean;

    @Field()
    @Column({default: true})
    left: boolean;
}
