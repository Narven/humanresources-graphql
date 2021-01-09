import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';

// TODO move to config
const dsn =
  'mongodb://humanresources:humanresources@127.0.0.1:27017/humanresources_dev';

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
