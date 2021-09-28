import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { Connection, getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { BrokerageController } from './brokerage/brokerage.controller';
import { BrokerageModule } from './brokerage/brokerage.module';
import { BrokerageService } from './brokerage/brokerage.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    BrokerageModule,
  ],
  controllers: [AppController, BrokerageController],
  providers: [BrokerageService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
