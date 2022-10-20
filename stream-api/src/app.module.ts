import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsModule } from './repository/channels.module';
import { dataSourceOptions } from './database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ChannelsModule],
})
export class AppModule {}
