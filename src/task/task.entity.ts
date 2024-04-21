export enum TaskStatus {
    pending = "pending",
    inProgress = "inProgress",
    done = 'done',
}

export class Task{
    id: number
    title: string
    description: string
    status: TaskStatus
}