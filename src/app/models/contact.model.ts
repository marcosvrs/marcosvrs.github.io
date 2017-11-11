export class Contact {
    name: string;
    email: string;
    message: string;
    date: Date;
    constructor(obj: { name: string, email: string, message: string, date?: Date }) {
        this.name = obj.name;
        this.email = obj.email;
        this.message = obj.message;
        this.date = obj.date || new Date();
    }
}
