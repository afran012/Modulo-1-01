const userCardTemplate = ({ id, email, posts, comments }) => {
    const userCard = `
        <h3>User Info #${id}</h3>
        <p>${email}</p>
        <div class="post">
        ${posts
            .map(
                (userPost, index) => `
          <h4>${index + 1}: ${userPost.title}</h4>
          ${comments[index]
                        .map(
                            (postComments) =>
                                `<p><span>${postComments.email}</span>: ${postComments.body}</p>`
                        )
                        .join("")}
        `
            )
            .join("")}
        </div>
    `;
    console.log(userCard);
    return userCard;
};

export { userCardTemplate as cardTemplate };

// Array.map(() => { });