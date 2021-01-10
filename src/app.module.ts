import { join } from 'path';
import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import * as dotenv from 'dotenv';

const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  DB_HOST,
  DB_PORT,
  MONGO_INITDB_DATABASE,
} = dotenv.config().parsed;

mongoose.set('debug', process.env.NODE_ENV !== 'production');

const dsn = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${DB_HOST}:${DB_PORT}/${MONGO_INITDB_DATABASE}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: process.env.NODE_ENV !== 'development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(dsn, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
