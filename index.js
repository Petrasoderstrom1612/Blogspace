
const postsDiv = document.getElementById("posts-div")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const dataArrReduced = data
        console.log(dataArrReduced)
        
        const returnedHtml = dataArrReduced.map(onePost => {
            return `<h1>${onePost.title}</h1>
                    <p>${onePost.body}</p>
                    <hr/>
                    `
        }).join("")
        
        postsDiv.innerHTML = returnedHtml
    })

document.getElementById("blog-form").addEventListener("submit", function(e) {
    e.preventDefault()

    let title = document.getElementById("title")
    let blogPost = document.getElementById("blog-post")
    // const userPost = {
    //     title: title.value,
    //     blogPost: blogPost.value
    // }
    // console.log(userPost)
    // title.value = ""
    // blogPost.value = ""

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title.value,
            blogPost: blogPost.value
        })
    })
    .then(res => res.json())
    .then(data => {console.log(data)})

    title.value = ""
    blogPost.value = ""
})