import Entity from './entity.js';

export default class User extends Entity {

    constructor(id, name, surname, email) {
        super(id);
        this._name = name;
        this._surname = surname;
        this._email = email;
    }

    validate() {

    }
}