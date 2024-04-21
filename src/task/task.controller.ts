import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
    
    @Get()
    heloworld(){
        return 'Hello World';
    }
}
