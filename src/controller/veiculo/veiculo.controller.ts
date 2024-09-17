import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateVeiculoDto } from 'src/dto/create-veiculo.dto';
import { UpdateVeiculoDto } from 'src/dto/update-veiculo.dto';
import { VeiculoService } from 'src/service/veiculo/veiculo.service';
@Controller('veiculo')
export class VeiculoController {
   constructor(private readonly veiculoService: VeiculoService) { }
@Post()
   async createVeiculo(@Res() response, @Body() createVeiculoDto: CreateVeiculoDto) {
  try {
    const newVeiculo = await this.veiculoService.createVeiculo(createVeiculoDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'Veiculo has been created successfully',
    newVeiculo,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Veiculo not created!',
    error: 'Bad Request'
 });
 }
}
@Put('/:id')
async updateVeiculo(@Res() response,@Param('id') veiculoId: string,
@Body() updateVeiculoDto: UpdateVeiculoDto) {
  try {
   const existingVeiculo = await this.veiculoService.updateVeiculo(veiculoId, updateVeiculoDto);
  return response.status(HttpStatus.OK).json({
  message: 'Veiculo has been successfully updated',
  existingVeiculo,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getVeiculos(@Res() response) {
try {
  const veiculoData = await this.veiculoService.getAllVeiculos();
  return response.status(HttpStatus.OK).json({
  message: 'All veiculos data found successfully',veiculoData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getVeiculo(@Res() response, @Param('id') veiculoId: string) {
 try {
    const existingVeiculo = await
this.veiculoService.getVeiculo(veiculoId);
    return response.status(HttpStatus.OK).json({
    message: 'Veiculo found successfully',existingVeiculo,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteVeiculo(@Res() response, @Param('id') veiculoId: string)
{
  try {
    const deletedVeiculo = await this.veiculoService.deleteVeiculo(veiculoId);
    return response.status(HttpStatus.OK).json({
    message: 'Veiculo deleted successfully',
    deletedVeiculo,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}