import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVeiculoDto } from 'src/dto/create-veiculo.dto';
import { IVeiculo } from 'src/interface/veiculo.interface';
import { Model } from "mongoose";
import { UpdateVeiculoDto } from 'src/dto/update-veiculo.dto';
@Injectable()
export class VeiculoService {
constructor(@InjectModel('Veiculo') private veiculoModel:Model<IVeiculo>) { }
async createVeiculo(createVeiculoDto: CreateVeiculoDto): Promise<IVeiculo> {
   const newVeiculo = await new this.veiculoModel(createVeiculoDto);
   return newVeiculo.save();
}
async updateVeiculo(veiculoId: string, updateVeiculoDto: UpdateVeiculoDto): Promise<IVeiculo> {
    const existingVeiculo = await        this.veiculoModel.findByIdAndUpdate(veiculoId, updateVeiculoDto, { new: true });
   if (!existingVeiculo) {
     throw new NotFoundException(`Veiculo #${veiculoId} not found`);
   }
   return existingVeiculo;
}
async getAllVeiculos(): Promise<IVeiculo[]> {
    const veiculoData = await this.veiculoModel.find();
    if (!veiculoData || veiculoData.length == 0) {
        throw new NotFoundException('Veiculos data not found!');
    }
    return veiculoData;
}
async getVeiculo(veiculoId: string): Promise<IVeiculo> {
   const existingVeiculo = await     this.veiculoModel.findById(veiculoId).exec();
   if (!existingVeiculo) {
    throw new NotFoundException(`Veiculo #${veiculoId} not found`);
   }
   return existingVeiculo;
}
async deleteVeiculo(veiculoId: string): Promise<IVeiculo> {
    const deletedVeiculo = await this.veiculoModel.findByIdAndDelete(veiculoId);
   if (!deletedVeiculo) {
     throw new NotFoundException(`Veiculo #${veiculoId} not found`);
   }
   return deletedVeiculo;
}
}