import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getMain():any{
    const a = {
      logo : "as",
      url : process.env.MONGO_URL,
      check: "after url"      
    }
    return a;
  }
}
