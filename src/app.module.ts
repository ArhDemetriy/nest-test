import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      url: process.env.DATABASE_URL,
      // host: 'postgresql-horizontal-62466',
      // port: 5432,
      // username: 'test',
      // password: 'test',
      // database: 'test',
      logging: true,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
