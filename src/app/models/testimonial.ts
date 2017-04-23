export class Testimonial {
    private _id: string;
    private _name: string;
    private _title: string;
    private _storie: string;

    constructor(id: string, name: string, title: string, storie: string) {
        this._id = id;
        this._name = name;
        this._title = title;
        this._storie = storie;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get title(): string {
        return this._title;
    }

    public get storie(): string {
        return this._storie;
    }

}
