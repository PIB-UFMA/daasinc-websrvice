export class CreateDoctorDto {
    nome: string;
    crm: string;
    email: string;
    password: string;
    endereco: string;
    pacientes: Array<string>
}
