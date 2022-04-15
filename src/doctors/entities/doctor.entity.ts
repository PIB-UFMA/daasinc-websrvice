import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';


export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
    @ApiProperty({
        description: 'Nome do médico',
        type: String
    })

    @ApiProperty()
    @Prop()
    nome: string;

    @ApiProperty()
    @Prop()
    crm: string;

    @ApiProperty()
    @Prop()
    email: string;

    @ApiProperty()
    @Prop()
    password: string;

    @ApiProperty()
    @Prop()
    endereco: string;

    @ApiProperty()
    @Prop()
    pacientes: Array<string>
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);