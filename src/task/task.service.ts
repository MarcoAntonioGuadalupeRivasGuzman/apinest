import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TaskService {

    private listTask: Task[] = [
        {
            id: 1,
            title: 'first task',
            description: 'some task',
            status: TaskStatus.pending,
        }
    ];

    getAllTask(){
        return this.listTask;
    }

    createTask(){

    }

    updateTask(){

    }

    deleteTask(){

    }
}
