import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
<<<<<<< HEAD
  getHello(): string {
    return 'Hello World!';
=======
  getHello() {
    return {message: 'Hello World!'};
>>>>>>> 612a255e293a9a447c32088520456d391825462b
  }
}
