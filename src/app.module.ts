import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { MainModule } from './main/main.module';
import { BotName } from './app.constants';
import { sessionMiddleware } from './middlewares';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      botName: BotName, // give your bot a name
      token: process.env.BOT_TOKEN, // your bot token get from botfather
      middlewares: [sessionMiddleware], // register your middlewares here
      include: [MainModule], // register your bot modules here
    }),
    MainModule, // and of course here for nestjs
  ],
})
export class AppModule {}
