import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrokerageController } from './brokerage.controller';
import { BrokerageService } from './brokerage.service';
import { ApartmentRepository } from './repositories/ApartmentRepository';

@Module({
  imports: [TypeOrmModule.forFeature([ApartmentRepository])],
  controllers: [BrokerageController],
  providers: [BrokerageService],
  exports: [TypeOrmModule],
})
export class BrokerageModule {}
