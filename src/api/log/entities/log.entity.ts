
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Log {

  @Prop({ required: true })
  title: string;

  
}

export type LogDocument = Log & Document;
export const LogSchema = SchemaFactory.createForClass(Log);