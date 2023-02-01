import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CleanerService } from './task-scheduler/cleaner/cleaner.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
}
