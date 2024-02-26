import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [UsersModule, ProductsModule, TransactionsModule],
})
export class AppModule {}
