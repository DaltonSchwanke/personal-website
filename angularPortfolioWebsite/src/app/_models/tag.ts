export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly PYTHON = new Tag('Python', 'gold');
    static readonly JAVA = new Tag('Java', 'orange');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }
}