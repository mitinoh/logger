import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Req, Query } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Http2ServerRequest } from 'http2';

@ApiTags('log')
@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(
    @Req() request: Http2ServerRequest, 
    @Body() createLogDto: CreateLogDto
  ) {
    return this.logService.create(request, createLogDto);
  }


  @ApiQuery({ name: 'name', type: 'string', required: false })
  @Get()
  findAll(@Req() req: Http2ServerRequest, @Query() query: any,) {
    return this.logService.findAll(req, query);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logService.remove(+id);
  }
}
