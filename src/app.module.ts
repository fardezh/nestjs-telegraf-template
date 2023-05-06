import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      botName: 'bot', // Set a name for your bot
      token: process.env.BOT_TOKEN,
      middlewares: [ /* register bot middlewares here */],
      include: [ /* import bot modules here */ ],
    }),]
  providers: [],
})
export class AppModule {}
