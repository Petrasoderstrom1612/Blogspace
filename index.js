const blogForm = document.getElementById("blog-form")
const postsDiv = document.getElementById("posts-div")
let dataArrReduced = []

const htmlVariable = () => { 
    const html = dataArrReduced.map(post => { //loop over the array
        return `
             <div class="one-post-div">
                <h3>${post.title}</h3>
                <hr />
                <p>${post.body}</p>
             </div>
            `}) 
    postsDiv.innerHTML = html.join("") //once you are done, gather it all, decompose it to string & update the DOM
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        dataArrReduced = data.slice(0,2)
        htmlVariable()
        console.log("dataArrReduced", dataArrReduced)             

        
    })

    blogForm.addEventListener("submit", function(e) {
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

    dataArrReduced.unshift(data) //update the array
    htmlVariable() //gather the html in the dom

    blogForm.clear() //clears all input fields within the form
    })
    .catch(error => console.error("Error:", error));
})