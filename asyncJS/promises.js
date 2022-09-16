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

const creatPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)

            const done = true;
            if (done) {
                resolve();
            }else {
                reject("error .....")
            }

        },2000);
    });
}

// creatPost({title:"post 3", content:"post 3 content"})
//     .then(getPosts)
//     .catch((err)=> {console.log(err);});

// // Promise.all

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Hello")
// });

// const p2 = Promise.resolve("Hi");

// const p3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([p1, p2, p3]).then((vals) => console.log(vals))

/********* Async - Await**********/ 

