import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './entities/doctor.entity';
import { Model } from 'mongoose';
import { userInfo } from 'os';

@Injectable()
export class DoctorsService {

  constructor(@InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>) { }

  create(createDoctorDto: CreateDoctorDto) {
    const doctor = new this.doctorModel(createDoctorDto);
    return doctor.save();
  }

  findAll() {
    return this.doctorModel.find();
  }

  findOne(id: string) {
    return this.doctorModel.findById(id);
  }

  update(id: string, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorModel.findByIdAndUpdate(
      {
        _id: id,
      }, {
      $set: updateDoctorDto,
    }, {
      new: true
    });
  }

  remove(id: string) {
    return this.doctorModel
      .deleteOne({
        _id: id,
      }).exec();
  }
}
