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
    //Prevent form defult behaviour
    e.preventDefault()
    //Checking if any form input is empty
    if (usernameInput.value === '' || titleInput.value === '' || blogContentInput.value === '') {
        alert("Please fill in all input fields")
    } else {
        //getting data previously stored in local storage to avoid it resetting after each submission
        userInfo = JSON.parse(localStorage.getItem("userInfo")) || []
        //pushing the user data currently entered into the usersInfo array
        userInfo.push({
            username: usernameInput.value,
            title: titleInput.value,
            content: blogContentInput.value
        })
        //setting this new data into local storage
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        //This is responsible for directing the user to blog.html 
        window.location.href = 'blog.html'
    }
}