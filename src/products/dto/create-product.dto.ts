import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsNumber()
  readonly size: number;
}
