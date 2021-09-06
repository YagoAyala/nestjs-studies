import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from '../../dto/products/create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
