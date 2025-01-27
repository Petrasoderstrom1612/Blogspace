
const postsDiv = document.getElementById("posts-div")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const dataArrReduced = data.slice(0, 25)
        console.log(dataArrReduced)
        
        const returnedHtml = dataArrReduced.map(onePost => {
            return `<h1>${onePost.title}</h1>
                    <p>${onePost.body}</p>
                    <hr/>
                    `
        }).join("")
        
        postsDiv.innerHTML = returnedHtml
    })