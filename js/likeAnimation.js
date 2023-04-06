document.addEventListener("keypress", event => {

    if ((event.code === "KeyQ") && (event.shiftKey)) {
        const likeDiv = document.createElement("div");
        document.body.prepend(likeDiv);

        const likeChatBookLogo = document.createElement("div");
        likeDiv.append(likeChatBookLogo);

        const likeText = document.createElement("div");
        likeDiv.append(likeText);

        const likeHand = document.createElement("div");
        likeDiv.append(likeHand);

        likeDiv.classList.add("evgeniyLikeAnimation");
        likeChatBookLogo.classList.add("likeChatBookLogo");
        likeText.classList.add("likeText");
        likeHand.classList.add("likeHand");
        likeText.classList.add("fw-bold");

        likeText.innerHTML = "ПОДПИШИСЬ!";
    }
});


