import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoRepository {
  sayHello() {
    return JSON.stringify({
      name: 'sei mama',
    });
  }
}
