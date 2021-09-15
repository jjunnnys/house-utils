import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BrokerageController } from './brokerage/brokerage.controller';
import { BrokerageModule } from './brokerage/brokerage.module';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })), BrokerageModule],
  controllers: [AppController, BrokerageController],
  providers: [],
})
export class AppModule {}
