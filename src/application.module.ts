import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BrokerageQueryController } from './brokerage-query/brokerage-query.controller';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' }))],
  controllers: [AppController, BrokerageQueryController],
  providers: [],
})
export class AppModule {}
