import {
  // HttpException,
  // HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Robinilson',
      brand: 'Adidus',
      size: 42,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.find((item) => item.id === +id);
    if (!product) {
      throw new NotFoundException(`Product with id: ${id}, not found`);
    }
    return product;
  }

  create(createProductDto: any) {
    this.products.push(createProductDto);
  }

  udpate(id: string, updateProductDto: any) {
    console.log(updateProductDto);
    const existingProduct = this.findOne(id);
    if (existingProduct) {
    }
  }

  remove(id: string) {
    const productIndex = this.products.findIndex((item) => item.id === +id);
    if (productIndex >= 0) {
      this.products.splice(productIndex, 1);
    }
  }
}
