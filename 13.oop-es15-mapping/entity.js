export default class Entity {

    constructor(id) {
        if (new.target === Entity) {
            throw new TypeError("Cannot construct Entity instances directly");
        }

        if (this.validate === undefined) {
            throw new TypeError("Must override method");
        }

        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
}