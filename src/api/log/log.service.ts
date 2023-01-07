import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Http2ServerRequest } from 'http2';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { MongooseQueryParser } from 'mongoose-query-parser';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { Log, LogDocument } from './entities/log.entity';

@Injectable()
export class LogService {

  mongooseParser = new MongooseQueryParser()
  // private readonly logger = new Logger(LogService.name);

  constructor(
    @Inject('winston') private readonly logger: Logger,
    @InjectModel(Log.name) private readonly logModel: Model<LogDocument>,
  ) { }

  create(
    request: Http2ServerRequest,
    createLogDto: CreateLogDto
  ) {
    let newCreateLog: LogDocument = new this.logModel({
      ...createLogDto
    })

    return newCreateLog.save();
  }

  findAll(
    request: Http2ServerRequest,
    bQuery: any
  ) {
    try {
      let query = this.mongooseParser.parse(bQuery);

      return this.logModel
        .find(query.filter)
        /*.populate({
          path: "following",
          match: { uid: uid }
        })*/
        .limit(query.limit)
        .skip(query.skip)
        .sort(query.sort)
        .select(query.select)

    } catch (error) {
      this.logger.error(error.message)
      // throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
    }

  }

  removeById(id: number) {
    return `This action removes a #${id} log`;
  }

  delete(filter: FilterQuery<any>) {
    try {
      return this.logModel.deleteMany(filter).then(c => this.logger.debug(c) )
    } catch (error) {
      this.logger.error(error)
    }
  }

}
