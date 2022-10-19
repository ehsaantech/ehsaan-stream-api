import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsModule } from './channels/channels.module';
import { ScholarsModule } from './scholars/scholars.module';
import { TracksModule } from './tracks/tracks.module';
import config from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ChannelsModule,
    ScholarsModule,
    TracksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
