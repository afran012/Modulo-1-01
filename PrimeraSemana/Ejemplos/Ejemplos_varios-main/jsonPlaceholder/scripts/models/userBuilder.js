import User from "./user.js";

export default class UserBuilder {

    setId(id) {
        this.id = id;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPosts(posts) {
        this.posts = posts;
        return this;
    }

    setComments(comments) {
        this.comments = comments;
        return this;
    }

    build() {
        return new User(this);
    }
}
