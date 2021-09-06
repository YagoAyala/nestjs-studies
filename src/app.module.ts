import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSettings } from './database/database';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseSettings.host,
      port: databaseSettings.port,
      username: databaseSettings.username,
      password: databaseSettings.password,
      database: databaseSettings.database,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
