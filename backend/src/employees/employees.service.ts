import { Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private empRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: EmployeeDto) {
    return 'This action adds a new employee';
  }

  async findAll(): Promise<EmployeeDto[]> {
    return await this.empRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: any) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
