import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CertificateModule } from './certificate/certificate.module';
import { StudentModule } from './student/student.module';
import { DemoModule } from './Demo/demo.module';

@Module({
  imports: [CertificateModule, StudentModule, DemoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
