export class PRNG {

    private _seed: number;

    public set seed(value: number) {

        this._seed = value;
        this._seed = Math.imul(741103597, this._seed) >>> 0; 
    }

    constructor(seed?: number) {

        this._seed = seed || Math.random();

        this._seed = Math.imul(741103597, this._seed) >>> 0; 
    }

    public getRandom(): number {

        this._seed = Math.imul(741103597, this._seed) >>> 0;

        return Math.floor(1e5 * (this._seed / (2 ** 32))) / 1e5;
    }
}
