import { Module } from '@nestjs/common';
import { BrokerageController } from './brokerage.controller';
import { BrokerageService } from './brokerage.service';

@Module({
  controllers: [BrokerageController],
  providers: [BrokerageService],
})
export class BrokerageModule {}
