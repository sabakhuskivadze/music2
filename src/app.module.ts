import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'musicweb',
      autoLoadEntities: true,
      synchronize: true,
    }),RegisterModule],
})
export class AppModule {}
