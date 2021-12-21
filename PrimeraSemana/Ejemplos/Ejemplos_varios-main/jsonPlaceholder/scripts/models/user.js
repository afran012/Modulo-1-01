export default class User {
    constructor(builder) {
        this._id = builder.id;
        this._email = builder.email;
        this._posts = builder.posts;
        this._comments = builder.comments;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    get posts() {
        return this._posts;
    }

    get comments() {
        return this._comments;
    }

    set id(id) {
        this._id = id;
    }

    set email(email) {
        this._email = email;
    }

    set posts(posts) {
        this._posts = posts;
    }

    set comments(comments) {
        this._comments = comments;
    }
}
