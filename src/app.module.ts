import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeiculoSchema } from './schema/veiculo.schema';
import { VeiculoService } from './service/veiculo/veiculo.service';
import { VeiculoController } from './controller/veiculo/veiculo.controller';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'crud'}),
    MongooseModule.forFeature([{ name: 'Veiculo', schema: VeiculoSchema }])],

    /*MongooseModule.forRoot('mongodb+srv://andrecromatico44:iind2tG1VkyjZ7OA@cluster0.jevir.mongodb.net/'),
MongooseModule.forFeature([{ name: 'Veiculo', schema: VeiculoSchema}])*/

  controllers: [AppController, VeiculoController],
  providers: [AppService, VeiculoService],
})
export class AppModule {}