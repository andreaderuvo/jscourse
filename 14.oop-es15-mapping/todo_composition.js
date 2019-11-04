import Entity from './entity.js';
import User from './user.js';

export default class Todo extends Entity {

    _title;
    _user;
    _completed;

    constructor(data) {
        super(data.id);
        this.validate(data);
        Object.assign(this, data);
    }

    validate(data) {
        if (!(data.user instanceof User)) {
            throw new TypeError("user is not an instance of User object");
        }
    }

    get title() {
        return this._title;
    }

    get user() {
        return this._user;
    }

    get completed() {
        return this._completed;
    }

    set title(title) {
        this._title = title;
    }

    set user(user) {
        this._user = user;
    }

    set completed(completed) {
        this._completed = completed;
    }
}