const darkModeBtn = document.querySelector('button[data-theme="dark"]')
const lightModeBtn = document.querySelector('button[data-theme="light"]')
const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const root = document.querySelector(':root')

darkModeBtn.addEventListener('click', function() {
    darkModeBtn.style.setProperty('display', 'none')
    lightModeBtn.style.setProperty('display', 'block')
    root.style.setProperty('--bgColor', '#212529')
    root.style.setProperty('--font-color', '#F8F9FA')
    root.style.setProperty('--hover', '#DEE2E6')
})

lightModeBtn.addEventListener('click', function() {
    lightModeBtn.style.setProperty('display', 'none')
    darkModeBtn.style.setProperty('display', 'block')
    root.style.setProperty('--bgColor', '#F8F9FA')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--hover', '#ADB5BD')
})