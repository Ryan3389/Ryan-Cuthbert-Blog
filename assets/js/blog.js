const themeBtn = document.getElementById('theme-btn');
const homeBtn = document.querySelector('.home-btn')
const anchorEl = document.querySelectorAll('a')
const bodyEl = document.querySelector('body');
const blogContainer = document.querySelector('.blog-container');
const blogPost = document.querySelectorAll('.blog-post');
const blogPostObj = JSON.parse(localStorage.getItem("userInfo"));
const messagePara = document.getElementById('message-para')



themeBtn.addEventListener("click", function (e) {
    setTheme(e);

});

function setTheme(e) {
    //adding/removing light theme classes to change the app theme
    //if renderBlogPost function renders undefined, change theme for already created elements
    if (renderBlogPosts() === undefined) {
        bodyEl.classList.toggle('light-mode')
        themeBtn.classList.toggle('light-mode')
        for (let i = 0; i < anchorEl.length; i++) {
            anchorEl[i].classList.toggle('light-mode')

        }
        //if renderBlogPost is not undefined, change theme for everything
        //This avoids newPosts variable from rendering undefined 
    } else {
        const newPosts = renderBlogPosts();
        bodyEl.classList.toggle('light-mode')
        themeBtn.classList.toggle('light-mode')
        //this loop changes the theme for each blog post
        for (let i = 0; i < newPosts.length; i++) {
            newPosts[i].classList.toggle('light-secondary')
        }
        //this loop changes the theme for each anchor element in the app
        for (let i = 0; i < anchorEl.length; i++) {
            anchorEl[i].classList.toggle('light-mode')

        }
    }
}



function renderBlogPosts() {
    blogContainer.innerHTML = '' //prevents blog posts from duplicating
    //if blogPostObj is empty (local storage) render this message onto the screen
    if (!blogPostObj) {
        messagePara.textContent = "There aren't any blog posts yet, click on the home button to be the first one to post!"
        //if blogPostObj isn't empty, create the required elements
    } else {
        for (let i = 0; i < blogPostObj.length; i++) {
            //div holding each post info
            const blogPostDiv = document.createElement("div");
            blogPostDiv.classList.add('blog-post');
            //this is where the username will render
            const blogPostH2 = document.createElement('h2');
            blogPostH2.classList.add('name');
            blogPostH2.textContent = blogPostObj[i].username;
            //this is where the blog title will render
            const blogPostH3 = document.createElement("h3");
            blogPostH3.classList.add("title");
            blogPostH3.textContent = blogPostObj[i].title;
            //This is where the blog content will render
            const blogPostPara = document.createElement("p");
            blogPostPara.classList.add("blog-content");
            blogPostPara.textContent = blogPostObj[i].content;
            //appending each element 
            blogContainer.append(blogPostDiv);
            blogPostDiv.append(blogPostH2);
            blogPostDiv.append(blogPostH3);
            blogPostDiv.append(blogPostPara);
        }
        //newBlogPosts represents each div containing each post
        //This function loops through each blog-post-class to add the dark-theme class
        const newBlogPosts = document.querySelectorAll('.blog-post');
        newBlogPosts.forEach(function (post) {
            post.classList.add("dark-secondary");
        });

        return newBlogPosts
    }
}

renderBlogPosts()



