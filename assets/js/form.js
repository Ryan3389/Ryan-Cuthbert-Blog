const usernameInput = document.getElementById('userName')
const titleInput = document.getElementById('title')
const blogContentInput = document.getElementById('blogContent')
const submitBtn = document.getElementById('submit-btn')

//Array to store user information
let userInfo = []

submitBtn.addEventListener('click', function (e) {
    saveBlogInfo(e)
})

function saveBlogInfo(e) {
    e.preventDefault()
    //checking if any input field is empty
    if (usernameInput.value === '' || titleInput.value === '' || blogContentInput.value === '') {
        alert("Please fill in all input fields")
    } else {
        //re assigning to userInfo what ever is in local storage, to avoid it resetting after each submission
        userInfo = JSON.parse(localStorage.getItem('userInfo')) || []

        //object containing user data to push into userInfo array
        const blogDataObj = {
            username: usernameInput.value,
            title: titleInput.value,
            content: blogContentInput.value
        }
        userInfo.push(blogDataObj)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        //when button is clicked, the user is redirected to blog.html
        window.location.href = 'blog.html'

    }
}