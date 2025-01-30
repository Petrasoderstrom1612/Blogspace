
const postsDiv = document.getElementById("posts-div")
let returnedHtml = []

const htmlVariable = (post) => { 
    return `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
            }

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const dataArrReduced = data.slice(0,2)
        console.log(dataArrReduced)
        
         returnedHtml = dataArrReduced.map(onePost => {
            return `${htmlVariable(onePost)} `
        })
        
        console.log("returnedHtm", returnedHtml)
        console.log("typeof", typeof returnedHtml)
        postsDiv.innerHTML = returnedHtml.join("")
    })

document.getElementById("blog-form").addEventListener("submit", function(e) {
    e.preventDefault()

    let title = document.getElementById("title")
    let blogPost = document.getElementById("blog-post")

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title.value,
            body: blogPost.value
        })
    })
    .then(res => res.json())
    .then(data => {console.log(data)

    returnedHtml.unshift(`${htmlVariable(data)} `)

    postsDiv.innerHTML = returnedHtml.join("")
    title.value = ""
    blogPost.value = ""
    })
    .catch(error => console.error("Error:", error));
})