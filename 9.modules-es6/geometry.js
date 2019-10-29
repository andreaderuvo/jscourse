export default class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

export class Triangle {
    constructor(base, height) {
        this._base = base;
        this._height = height;
    }

    area() {
        return this._height * this._base / 2;
    }

    get base() {
        return this._base;
    }

    set base(base) {
        this._base = base;
    }
}