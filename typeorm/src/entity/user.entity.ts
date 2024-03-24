import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class UserModel{
    // ID
    // 자동으로 ID를 생성한다 
    // Primary Column은 모든 테이블에서 기본적으로 존재한다
    // @PrimaryColumn은 기본키를 자동으로 생성하지 않고 직접 입력해야 한다
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // 데이터 생성 일자
    // 데이터가 생성되는 날짜와 시간이 자동으로 찍힌다 
    @CreateDateColumn()
    createdAt: Date;

    // 데이터 업데이트 일자
    // 데이터가 업데이트 되는 날짜와 시간이 자동으로 찍힌다
    @UpdateDateColumn()
    updatedAt: Date;

    // 데이터가 업데이트 될때마다 1씩 올라간다
    // 처음 생성되면 값은 1이다 
    @VersionColumn()
    version: number;

    @Column()
    @Generated('increment')
    additionalId: number;
}