import { ChildEntity, Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn, TableInheritance, UpdateDateColumn } from "typeorm";

export class BaseModel{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity()
export class Book extends BaseModel{
    
    @Column()
    name: string;
}

@Entity()
export class Car extends BaseModel{
    @Column()
    brand: string;
}

@Entity()
@TableInheritance({
    column:{
        name: 'type',
        type: 'varchar',
    }
})
export class SingleClass{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@ChildEntity()
export class Computer extends SingleClass{
    @Column()
    brand: string;
}

@ChildEntity()
export class Airplane extends SingleClass{
    @Column()
    country: string;
}
