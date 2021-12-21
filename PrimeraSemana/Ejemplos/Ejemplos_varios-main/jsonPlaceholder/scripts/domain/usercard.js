import * as UserService from "../services/userservices.js";
import * as UserCardTemplate from "./usercardtemplate.js";
import UserBuilder from "../models/userBuilder.js";

const createUserCardInfo = async (userId, postsLimit, commentsLimit) => {
    try {
        const { id, email } = await UserService.getUser(userId);
        const userPosts = await UserService.getPosts(userId, postsLimit);
        const userComments = await UserService.getComments(userPosts, commentsLimit);

        if (id === undefined) {
            throw new Error("No se pudo obtener la información de usuario");
        }

        let userData = new UserBuilder()
            .setId(id)
            .setEmail(email)
            .setPosts(userPosts)
            .setComments(userComments);

        return await UserCardTemplate.cardTemplate(userData);
    } catch (error) {
        console.error(error);
        return "";
    }
};

const insertUserCardContainer = async (container, id, limitPosts, limitComments) => {
    const contentUser = document.createElement("div");
    contentUser.id = id;
    contentUser.classList.add("container", "spinner");
    container.after(contentUser);
    return {
        id: id,
        html: await createUserCardInfo(id, limitPosts, limitComments)
    };
};

const insertUserCardTemplate = (data) => {
    document.getElementById(data.id).classList.remove("spinner");
    if (data.html) {
        document.getElementById(data.id)
            .insertAdjacentHTML("afterbegin", data.html);
    } else {
        document.getElementById(data.id).remove();
    }
};

export {
    insertUserCardContainer as insertContainer,
    insertUserCardTemplate as insertTemplate,
    createUserCardInfo as createInfo
};