import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { LogService } from '../../api/log/log.service';

@Injectable()
export class CleanerService {

  constructor(
    private logService: LogService
  ) { }

  // private readonly logger = new Logger(CleanerService.name);

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // handleCron() {
  //   let lastDate: Date = new Date(Date.now() - 604800000);
  //   let query = {
  //     date: {
  //       $lte: lastDate.toISOString(),
  //     }
  //   }
  //   // this.logService.delete(query)
  // }
}
