class Person {

    private _name: string;
    private _born: number;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get born(): number {
        return this._born;
    }

    set born(born: number) {
        this._born = born;
    }
}

const t = new Person();
t.name = 'kevin';

const tx: typeof t = new Person();

const st = typeof t;

const tt = typeof t;
console.log(typeof tt);