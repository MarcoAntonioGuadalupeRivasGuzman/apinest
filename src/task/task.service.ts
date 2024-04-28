import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {

    private listTask: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.pending,
        }
    ];

    getAllTask(){
        return this.listTask;
    }

    createTask(title: string,description: string){
        const task={
            id: v4(),
            title,
            description,
            status: TaskStatus.pending
        }
        this.listTask.push(task)

        return task;
    }

    updateTask(){

    }

    deleteTask(){

    }
}
