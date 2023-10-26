import { Controller, Get, Param } from '@nestjs/common';

@Controller('/api/students')
export class StudentController {
  @Get('/')
  getStudents() {
    return 'hello';
  }
  @Get('/:id')
  getStudentWithId(@Param('id') id: string) {
    return `got id ${id}`;
  }
}
