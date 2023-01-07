import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LogModule } from '../api/log/log.module';
import { CleanerService } from './cleaner/cleaner.service';

@Module({
  imports: [
    LogModule, 
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [ CleanerService],
  exports: [
    CleanerService
  ]
})

export class TaskSchedulerModule {}
