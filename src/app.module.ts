import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DBURL,
      synchronize: true,
      useUnifiedTopology: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
