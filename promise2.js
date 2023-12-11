function fetchUserData() {
    const utente = {
        id: 1,
        name: "John",
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (utente.name === "John") {
                resolve(utente.name)

            } else reject("insert a name")
        }, 1000)
    })
}

function fetchUserPosts() {
    const posts = ['Post 1', 'Post 2', 'Post 3'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(posts)) {
                resolve(posts)

            } else reject("insert a post")

        }, 2000)
    })  
}

const userData = fetchUserData().then((data)=> {
    console.log(data);
}).catch((error)=> {
    console.log(error)
})

const userPosts = fetchUserPosts().then((data)=> {
    console.log(data);
}).catch((error)=> {
    console.log(error)
})



