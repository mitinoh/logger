import { Document, Schema as MongooseSchema } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from "class-transformer";
import { IsEnum, IsIn, IsNumber, IsString } from "class-validator";
import { LogLevel } from "./level.enum";

@Schema()
export class Log {

  @ApiProperty({ type: String })
  @Prop({ type: String })
  @IsString()
  message: string
}

export type LogDocument = Log & Document;
export const LogSchema = SchemaFactory.createForClass(Log);