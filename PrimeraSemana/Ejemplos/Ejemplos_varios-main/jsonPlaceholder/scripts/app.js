
// import User from './models/user.js';
// import UserBuilder from './models/userBuilder.js';
// import { CONFIG_DEV } from './configs/config.js';
// import * as UserServices from "./services/userservices.js";
// import { userCardMock } from "./domain/usercardtemplatemock.js";
// import { cardTemplate } from "./domain/usercardtemplate.js";

import * as UserCard from "./domain/usercard.js";
import { $ } from "./utils/domUtils.js";

const containerButton = document.getElementById('containerButton');
const userId = document.getElementById("userId");
const postLimit = document.getElementById("postsLimit");
const commentsLimit = document.getElementById("commentsLimit");

// const container = document.getElementById("1");


containerButton.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.matches("#btnUser")) {
        // const user = UserServices.getUser(userId.value);
        // user.then(console.log).catch(console.error);

        // const posts = UserServices.getPosts(userId.value, postLimit.value);
        // posts.then(console.log).catch(console.error);

        // const comments = UserServices.getPosts(postLimit.value, commentsLimit.value);
        // comments.then(console.log).catch(console.error);

        // // console.log(userCardMock);

        // const htmlCard = cardTemplate(userCardMock);

        // container.insertAdjacentHTML("afterbegin", htmlCard);
        // console.log(createCard(1, 1, 1));
        // console.log(createCard(2, 2, 2));
        // console.log(createCard(3, 3, 3));

        Promise.all([
            UserCard.insertContainer(containerButton, userId.value, postLimit.value, commentsLimit.value)
                .then(UserCard.insertTemplate)
                //.then( data =>  { 
                //  UserCard.insertTemplate(data);
                // })
                .catch(console.error)
                //.catch( error => console.error(error))
        ]);

    }
});



$("#userId").attr("class", "new-class");





// let user = new UserBuilder()
//     .setId(1)
//     .setEmail('')
//     .setPosts([])
//     .setComments([])
//     .build();

// const builder = {
//     id: 1,
//     email: '',
//     posts: [],
//     comments: []
// };

// let user = new User(builder);

// user._id => 1
// user._email => ''
// user._posts => []
// user._comments => []
// console.log(user);

// const btnUser = document.getElementById('btnUSer');

// const objetito = {
//     id: 1
// };

// objetito = {
//     email: ''
// };

// console.log(CONFIG_DEV.APY_KEY);

// objetito.email = '';


// const PI = 3.141519;
// PI = 6.0;


// btnUser.classList.add('');