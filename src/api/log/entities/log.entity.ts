import { Document, Schema as MongooseSchema } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from "class-transformer";
import { IsEnum, IsIn, IsNumber, IsString } from "class-validator";
import { LogLevel } from "./level.enum";

@Schema()
export class Log {

  @ApiProperty({ type: MongooseSchema.Types.ObjectId })
  @Prop({ type: MongooseSchema.Types.ObjectId })
  @Transform(({ value }) => value.toString())
  id: MongooseSchema.Types.ObjectId

  @ApiProperty({ enum: LogLevel })
  @Prop({type: Number, enum: LogLevel, default: LogLevel.INFO })
  level: Number

  @ApiProperty({ type: String })
  @Prop({ type: String })
  @IsString()
  location: string

  @ApiProperty({ type: String })
  @Prop({ type: String })
  @IsString()
  message: string

  // @ApiProperty({ type: MongooseSchema.Types.ObjectId })
  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name, required: [true, 'Name is Required'] })
  // uid: User

  @Prop({ type: Date })
  date: Date

}

export type LogDocument = Log & Document;
export const LogSchema = SchemaFactory.createForClass(Log);