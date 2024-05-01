import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  job_title: string;

  @Column()
  salary: number;

  @Column()
  reports_to: number;

  @Column()
  office_id: number;
}
