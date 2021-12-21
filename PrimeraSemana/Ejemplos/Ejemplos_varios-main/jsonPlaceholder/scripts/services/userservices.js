import { CONFIG_DEV } from "../configs/config.js";

//#region Inicio servicios
const getUser = async (userId) => {
    const response = await fetch(`${CONFIG_DEV.USER_SERVICE_URL}/users/${userId}`);
    const user = await response.json();
    return user || {};
};

const getPosts = async (userId, limit = 1) => {
    const response = await fetch(`${CONFIG_DEV.USER_SERVICE_URL}/posts?userId=${userId}&_limit=${limit}`);
    const posts = await response.json();
    return posts || {};
};

const getComments = async (posts, limit = 1) => {

    const response = await Promise.all(
        posts.map((post) =>
            fetch(`${CONFIG_DEV.USER_SERVICE_URL}/comments?postId=${post.id}&_limit=${limit}`)
        )
    );
    // const response = await fetch(`${CONFIG_DEV.USER_SERVICE_URL}/comments?postId=${postId}&_limit=${limit}`);
    const comments = await Promise.all(response.map(promise => promise.json()));
    return comments || {};
};
//#endregion Fin servicios

export { getUser, getPosts, getComments };