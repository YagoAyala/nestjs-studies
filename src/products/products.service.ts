import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id: ${id}, not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async udpate(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id: +id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
