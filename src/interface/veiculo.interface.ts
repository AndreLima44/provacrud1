import { Document } from 'mongoose';
export interface IVeiculo extends Document{
    readonly modelo: string;
    readonly anoFabricacao: number;
    readonly placa: number;
}