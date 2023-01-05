import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { LogModule } from './api/log/log.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logConf, MONGO_CONNECTION, pth } from './conf/app.prop';

import { WinstonModule } from 'nest-winston';

const winston = require('winston');
require('winston-daily-rotate-file');

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_CONNECTION),
    LogModule,


    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-error.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.err,
        }),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-debug.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.debug,
        }),
        new (winston.transports.DailyRotateFile)({
          filename: '%DATE%-info.log',
          datePattern: logConf.logDatePattern,
          maxSize: logConf.logFileMaxSize,
          dirname: pth.info,
        }),
      ],
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}