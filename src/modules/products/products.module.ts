import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { Product } from '../../entities/products/product.entity';
import { ProductsController } from '../../controllers/products/products.controller';
import { ProductsService } from '../../services/products/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Event])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
