import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.jckbc.mongodb.net/test')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
