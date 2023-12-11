function createBlog() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageInput = document.getElementById('image');

    const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';

    const blog = { name, date, title, description, image };

    saveBlog(blog);
    displayBlogs();

}

function saveBlog(blog) {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}



function displayBlogs() {
    const blogListContainer = document.getElementById('blog-card-container');
    blogListContainer.innerHTML = '';

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    blogs.forEach((blog) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        const image = blog.image ? `<img src="${blog.image}" alt="Image">` : '';

        blogCard.innerHTML = `
           ${image}
    <h4><u>${blog.name}</u>---<span style="color: rgb(181, 184, 185);
">(${blog.date})</span> </h4>

           <u><strong>${blog.title}</strong></u> <br>
             
        <p>${blog.description}</p>

        `;
        blogListContainer.appendChild(blogCard);
    });
}


function removeAllBlogs() {
    if (confirm("Are you sure you want to delete all blogs?")) {
        localStorage.removeItem('blogs');
        displayBlogs();
    }
}

displayBlogs();