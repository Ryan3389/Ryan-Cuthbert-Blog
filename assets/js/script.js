const themeBtn = document.querySelector(".theme-btn")
const bodyEl = document.querySelector('body')
const sectionEl = document.querySelector('section')
const anchorEl = document.querySelectorAll('a')


themeBtn.addEventListener('click', function (e) {
    setTheme(e)
})



//changes theme of web page
function setTheme(e) {
    bodyEl.classList.toggle('light-mode')
    sectionEl.classList.toggle("light-secondary")
    themeBtn.classList.toggle('light-mode')

    for (let i = 0; i < anchorEl.length; i++) {
        anchorEl[i].classList.toggle('light-mode')
    }
}
