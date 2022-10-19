import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScholarsService } from './scholars.service';
import { CreateScholarDto } from './dto/create-scholar.dto';
import { UpdateScholarDto } from './dto/update-scholar.dto';

@Controller('scholars')
export class ScholarsController {
  constructor(private readonly scholarsService: ScholarsService) {}

  @Post()
  create(@Body() createScholarDto: CreateScholarDto) {
    return this.scholarsService.create(createScholarDto);
  }

  @Get()
  findAll() {
    return this.scholarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scholarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScholarDto: UpdateScholarDto) {
    return this.scholarsService.update(+id, updateScholarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scholarsService.remove(+id);
  }
}
