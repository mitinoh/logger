import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsIn } from "class-validator";
import { LogLevel } from "../entities/level.enum";

export class CreateLogDto {

  @ApiProperty({enum: LogLevel})
  @IsEnum(LogLevel)
  level: LogLevel;
  
  @ApiProperty({type: String})
  location: string;
  
  @ApiProperty({type: String})
  message: string;

  date: number = Date.now()

}
