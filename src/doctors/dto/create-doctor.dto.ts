import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
    @ApiProperty()
    nome: string;
    @ApiProperty()
    crm: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    endereco: string;
    @ApiProperty()
    pacientes: Array<string>
}
