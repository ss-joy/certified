import { Injectable } from '@nestjs/common';
import { DemoRepository } from './demo.respository';
@Injectable()
export class DemoService {
  private demoRepository: DemoRepository;
  constructor(demoRepository: DemoRepository) {
    this.demoRepository = demoRepository;
  }
  sayHello() {
    return this.demoRepository.sayHello();
  }
}
