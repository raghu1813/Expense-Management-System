import { Expense } from "./Expense";

export interface User{
    id: number;
    username: string;
    roles?: string[];
    expenses: Expense[];
}