import Entity from './entity.js';
import User from './user.js';

export default class Todo extends Entity {

    _title;
    _userId;
    _completed;

    constructor(data) {
        super(data.id);
        Object.assign(this, data);
    }

    validate(data) {}

    get title() {
        return this._title;
    }

    get userId() {
        return this._userId;
    }

    get completed() {
        return this._completed;
    }

    set title(title) {
        this._title = title;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set completed(completed) {
        this._completed = completed;
    }
}