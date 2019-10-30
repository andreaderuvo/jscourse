import Entity from './entity.js';

export default class User extends Entity {

    constructor(id, name, surname, email) {
        super(id);
        this._name = name;
        this._surname = surname;
        this._email = email;
        validate();
    }

    validate() {
        this.validateEmail();
    }

    validateEmail() {
        //https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this._email).toLowerCase());
    }
}