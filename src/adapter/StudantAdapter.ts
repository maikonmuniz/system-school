import { School } from "../domain/entities/school/school";

export class StudantAdapter{
    static create(code: string, name: string, capacity: number, quantity: number){
        return new School(code, name, capacity, quantity)
    }
}
