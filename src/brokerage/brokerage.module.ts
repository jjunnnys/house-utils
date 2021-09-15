import { Module } from '@nestjs/common';
import { BrokerageController } from './brokerage.controller';

@Module({
  controllers: [BrokerageController],
  providers: [],
})
export class BrokerageModule {}
