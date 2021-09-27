import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BrokerageController } from './brokerage/brokerage.controller';
import { BrokerageModule } from './brokerage/brokerage.module';
import { BrokerageService } from './brokerage/brokerage.service';
import { ApartmentRepository } from './brokerage/repositories/ApartmentRepository';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    BrokerageModule,
  ],
  controllers: [AppController, BrokerageController],
  providers: [BrokerageService, ApartmentRepository],
})
export class AppModule {}
