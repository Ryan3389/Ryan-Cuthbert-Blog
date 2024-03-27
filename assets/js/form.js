const usernameInput = document.getElementById('userName')
const titleInput = document.getElementById('title')
const blogContentInput = document.getElementById('blogContent')
const submitBtn = document.getElementById('submit-btn')


let userInfo = []
submitBtn.addEventListener('click', function (e) {
    saveBlogInfo(e)
})

function saveBlogInfo(e) {
    e.preventDefault()
    if (usernameInput.value === '' || titleInput.value === '' || blogContentInput.value === '') {
        alert("Please fill in all input fields")
    } else {
        userInfo = JSON.parse(localStorage.getItem('userInfo')) || []

        const blogDataObj = {
            username: usernameInput.value,
            title: titleInput.value,
            content: blogContentInput.value
        }
        userInfo.push(blogDataObj)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        window.location.href = 'blog.html'

    }
}