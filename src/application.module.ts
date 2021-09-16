import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BrokerageController } from './brokerage/brokerage.controller';
import { BrokerageModule } from './brokerage/brokerage.module';
import { Apartment } from './brokerage/entities/apartment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'house_utils',
      entities: [Apartment], // 여기에 생성한 Entity 를 넣어준다.**
      synchronize: true,
    }),
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    BrokerageModule,
  ],
  controllers: [AppController, BrokerageController],
  providers: [],
})
export class AppModule {}
