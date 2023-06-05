
export class School{
    code: string;
    name: string;
    capacity: number;
    quantity: number;

    constructor(code: string, name: string, capacity: number, quantity: number){
        this.name     = name;
        this.capacity = capacity;
        this.quantity = quantity
    }

    isRegister(){
        return (this.quantity <= this.capacity);
    }
}
