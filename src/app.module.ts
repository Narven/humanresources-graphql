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
const dsn = 'mongodb://shipserv:shipserv@127.0.0.1:27017/shipserv_dev';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    MongooseModule.forRoot(dsn),
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
