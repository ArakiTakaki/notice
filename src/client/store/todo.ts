import { atom } from 'recoil';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [];

export const todoState = atom({
  key: 'task',
  default: initialTasks,
})
