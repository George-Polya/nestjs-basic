import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export enum Role{
    ADMIN = 'admin',
    USER = 'user'
}

@Entity()
export class UserModel{
    // ID
    // 자동으로 ID를 생성한다 
    // Primary Column은 모든 테이블에서 기본적으로 존재한다
    // @PrimaryColumn은 기본키를 자동으로 생성하지 않고 직접 입력해야 한다
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        // 데이터베이스에 인지하는 칼럼타입
        // 자동으로 유추됨
        type: 'varchar',

        // 데이터 베이스 칼럼 이름
        // 프로퍼티 이름으로 자동 유추됨
        name : 'title',

        // 값의 길이
        // 입력할 수 있는 글자의 길이가 300,
        length: 300,

        // null이 가능한지
        nullable: true,

        // true면 처음 저장할 때만 값 지정 가능 
        // 이후에는 값 변경 불가능 
        update : true,

        // 기본값이 true
        // find()를 실행할때 기본으로 값을 불러올지 
        select : true,

        // 기본값
        // 아무것도 입력안했을때 기본으로 입력되게 하는 값
        default: 'default',

        // 칼럼중에서 유일무이한 값이 되야하는지
        unique: false,
    })
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


    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role : Role;
}