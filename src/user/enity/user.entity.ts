import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { SalaryEntity } from "./salary.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @OneToMany(() => SalaryEntity, (salaryentity) => salaryentity.userentity)
  salaryentity: SalaryEntity[];
}
