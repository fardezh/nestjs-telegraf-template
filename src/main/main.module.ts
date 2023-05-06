import { Module } from '@nestjs/common';
import { MainUpdate } from './main.update';

@Module({
  providers: [MainUpdate], // register your Update class
})
export class MainModule {}
