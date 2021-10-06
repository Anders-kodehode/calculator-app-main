let switchBtn = document.querySelector('.switch-btn')

let addOrRemoveClass = (element, nameClass) => {
    action = 'add'
        element.classList.add(nameClass)
        element.classList.remove(nameClass)
}

let purpleMode = () => {
    addOrRemoveClass(switchBtn, 'remove', 'slide-2')
    addOrRemoveClass(switchBtn, 'remove', 'slide-1')
}

let lightMode = () => {
    addOrRemoveClass(switchBtn, 'add', 'slide-2')
    addOrRemoveClass(switchBtn, 'remove', 'slide-1')
}

let blueMode = () => {
    addOrRemoveClass(switchBtn, 'add', 'slide-1')
}

let toggleTheme = () => {
    if (switchBtn.classList.contains('slide-2')) {
        purpleMode()
    }   else if (switchBtn.classList.contains('slide-1')) {
        lightMode()
    }   else if (switchBtn.classList.contains('slide-1')) {
        blueMode()
    }
}
switchBtn.addEventListener('click', toggleTheme)