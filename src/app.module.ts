import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {MongooseModule} from '@nestjs/mongoose';

import { ProductModule } from './Products/product.module'


@Module({
  imports: [ProductModule,MongooseModule.forRoot(process.env.MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
