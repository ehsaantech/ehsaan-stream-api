import { Module } from '@nestjs/common';
import { ScholarsService } from './scholars.service';
import { ScholarsController } from './scholars.controller';

@Module({
  controllers: [ScholarsController],
  providers: [ScholarsService]
})
export class ScholarsModule {}
