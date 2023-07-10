import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsModule } from './repository/channels.module';
import { dataSourceOptions } from '../db/data-source';
import { UserModule } from './repository/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ChannelsModule, UserModule],
})
export class AppModule {}
