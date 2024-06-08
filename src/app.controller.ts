<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
=======
import { Controller, Get, Render } from '@nestjs/common';
>>>>>>> 612a255e293a9a447c32088520456d391825462b
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
<<<<<<< HEAD
  getHello(): string {
=======
  @Render('index')
  root() {
>>>>>>> 612a255e293a9a447c32088520456d391825462b
    return this.appService.getHello();
  }
}
