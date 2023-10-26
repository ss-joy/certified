import { Controller, Get, Injectable } from '@nestjs/common';
import { DemoService } from './demo.service';
@Injectable()
@Controller('/demo')
export class DemoController {
  private demoService: DemoService;
  constructor(demoService: DemoService) {
    this.demoService = demoService;
  }
  @Get()
  sayHello() {
    return this.demoService.sayHello();
  }
}
