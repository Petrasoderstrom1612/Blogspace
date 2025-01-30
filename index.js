
const postsDiv = document.getElementById("posts-div")
let returnedHtml = []

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const dataArrReduced = data.slice(0,2)
        console.log(dataArrReduced)
        
         returnedHtml = dataArrReduced.map(onePost => {
            return `<h1>${onePost.title}</h1>
                    <p>${onePost.body}</p>
                    <hr/>
                    `
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

    returnedHtml.unshift(`<h1>${data.title}</h1>
                    <p>${data.body}</p>
                    <hr/>
                    `)

    postsDiv.innerHTML = returnedHtml.join("")
    title.value = ""
    blogPost.value = ""
    })
    .catch(error => console.error("Error:", error));
})