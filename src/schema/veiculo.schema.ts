import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Veiculo {
   @Prop()
   modelo: string;
   @Prop()
   anoFabricacao: number;
   @Prop()
   placa: string;
}
export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);