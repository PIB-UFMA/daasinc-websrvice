import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://oministack10:<password>@cluster0.nizan.mongodb.net/test'),
    DoctorsModule,
    PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
