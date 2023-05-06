import {
  InjectBot,
  Update,
  Start,
  Help,
  Ctx,
  Command,
  On,
} from 'nestjs-telegraf';
import { BotName } from 'src/app.constants';
import { BotContext } from 'src/interfaces';
import { Telegraf } from 'telegraf';

@Update()
export class MainUpdate {
  constructor(
    @InjectBot(BotName)
    private readonly bot: Telegraf<BotContext>,
  ) {}

  @Start()
  async onStart(@Ctx() ctx: BotContext): Promise<string> {
    return 'Start!';
  }

  @Help()
  async onHelp(): Promise<string> {
    return 'Help';
  }

  @Command('hello')
  async onHelloCommand(): Promise<string> {
    return 'Hello';
  }

  @On('photo')
  async onPhoto(): Promise<string> {
    return 'this is a photo!';
  }
}
