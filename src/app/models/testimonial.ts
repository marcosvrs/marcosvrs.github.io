interface ITestimonial {
    name: string;
    email: string;
    title: string;
    storie: string;
}

export class Testimonial implements ITestimonial {
    private _name: string;
    private _email: string;
    private _title: string;
    private _storie: string;

    constructor(obj: ITestimonial) {
        this._name = obj.name;
        this._email = obj.email;
        this._title = obj.title;
        this._storie = obj.storie;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public get title(): string {
        return this._title;
    }

    public get storie(): string {
        return this._storie;
    }

}
