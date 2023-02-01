import { ApiProperty } from "@nestjs/swagger";

export class CreateLogDto {
  
  @ApiProperty({type: String})
  message: string;
}
