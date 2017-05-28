export class Testimonial {
    name: string;
    email: string;
    title: string;
    storie: string;
    date: Date;
    constructor(obj: { name: string, email: string, title: string, storie: string, date?: Date }) {
        this.name = obj.name;
        this.email = obj.email;
        this.title = obj.title;
        this.storie = obj.storie;
        this.date = obj.date || new Date();
    }
}