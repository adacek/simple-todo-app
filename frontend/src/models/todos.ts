export interface Todo {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    completed: boolean;
    deletedAt?: Date;
}