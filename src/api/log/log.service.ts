import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Http2ServerRequest } from 'http2';
import { Model } from 'mongoose';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { Log, LogDocument } from './entities/log.entity';

@Injectable()
export class LogService {
  constructor(
    @Inject('winston') private readonly logger: Logger,
    @InjectModel(Log.name) private readonly logModel: Model<LogDocument>,
  ) {}

  create(
    request: Http2ServerRequest,
    createLogDto: CreateLogDto
  ) {

    let newCreateLog: LogDocument = new this.logModel({
      ...createLogDto
    })

    return newCreateLog.save();
  }

  findAll(req: Http2ServerRequest ,createLogDto: CreateLogDto) {
    return `This action returns all log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
