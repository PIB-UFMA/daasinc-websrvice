import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
   
    @Prop()
    nome: string;

    @Prop()
    crm: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    endereco: string;

    @Prop()
    pacientes: Array<string>
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);