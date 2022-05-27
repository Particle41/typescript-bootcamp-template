export class Greeting {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    hello(): string {
        return `hello ${this.name}`
    }
}