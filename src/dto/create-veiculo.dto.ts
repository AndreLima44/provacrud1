import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateVeiculoDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly modelo: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly anoFabricacao: number;
    
    @IsString()
    @IsNotEmpty()
    readonly placa: string;
}