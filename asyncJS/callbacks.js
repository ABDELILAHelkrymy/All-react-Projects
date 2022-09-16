const posts = [
    {title: "post 1", content:"post 1 content"},
    {title: "post 2", content:"post 2 content"},
]

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, indx) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
};

const creatPost = (post, callback) => {
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}

creatPost({title:"post 3", content:"post 3 content"}, getPosts);