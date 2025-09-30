import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

enum Status {

  ACTIVE = 'ACTIVE',

  INACTIVE = 'INACTIVE'

}
enum Role{
    ADMIN = 'ADMIN', 
    CLIENT = 'CLIENT'
}

@Entity()

export class User extends BaseEntity {

  @PrimaryGeneratedColumn()

  id: number;
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false
      })
  first_name: string;
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false
      })
  surname: string;
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false
      })
  email: string;
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false
      })
  password: string;
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false
      })
