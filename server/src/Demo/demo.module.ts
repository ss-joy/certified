import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { DemoRepository } from './demo.respository';

@Module({
  controllers: [DemoController],
  providers: [DemoService, DemoRepository],
})
export class DemoModule {}
