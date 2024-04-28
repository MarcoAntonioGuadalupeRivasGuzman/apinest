import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService){}
    
    @Get()
    getListTask(){
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        //console.log(newTask);
        //return 'guardando'
        return this.taskService.createTask(newTask.title,newTask.description);
    }

}
