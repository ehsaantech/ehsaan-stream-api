import { Injectable } from '@nestjs/common';
import { CreateScholarDto } from './dto/create-scholar.dto';
import { UpdateScholarDto } from './dto/update-scholar.dto';

@Injectable()
export class ScholarsService {
  create(createScholarDto: CreateScholarDto) {
    return 'This action adds a new scholar';
  }

  findAll() {
    return `This action returns all scholars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scholar`;
  }

  update(id: number, updateScholarDto: UpdateScholarDto) {
    return `This action updates a #${id} scholar`;
  }

  remove(id: number) {
    return `This action removes a #${id} scholar`;
  }
}
