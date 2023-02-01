import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { LogModule } from './api/log/log.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logConf, pth } from './conf/app.prop';

import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskSchedulerModule } from './task-scheduler/task-scheduler.module';

const winston = require('winston');
require('winston-daily-rotate-file');

@Module({
  imports: [
    TaskSchedulerModule,

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.prod'
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    LogModule,



    WinstonModule.forRoot({
      exitOnError: false,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        winston.format.colorize()
      ),
      transports: [
        new winston.transports.Console(),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-error.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.err,
          level: "error",
          json: false
        }),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-debug.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.debug,
          level: "debug",
          json: false
        }),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-info.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.info,
          level: "info",
          json: false
        }),
      ],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
