const Linkstheme = document.querySelectorAll('.content__theme__link')
const body = document.getElementById('body')

Linkstheme.forEach((link, index)=>{
    link.addEventListener('click', ()=>{
        changeTheme(index)
    })
})

function changeTheme(index){
   switch(index){
        case 0:
            body.classList.remove('theme2', 'theme3')
        break
        case 1:
            body.classList.add('theme2')
            body.classList.remove('theme3')
        break
        case 2:
            body.classList.add('theme3') 
        break
   }
}

// let html = document.querySelector('html')
// let body = document.querySelector('body')
// let switchBtn = document.querySelector('.switch-btn')
// let resultScreen = document.querySelector('.result-screen')
// let input = document.querySelectorAll('button')
// let equalBtn = document.querySelector('.equal')

// let addOrRemoveClass = (element, action, nameClass) => {
//     action = 'add'
//         ? element.classList.add(nameClass)
//         : element.classList.remove(nameClass)
// }

// let blueMode = () => {
//     addOrRemoveClass(switchBtn, 'remove', 'slide-1')
//     addOrRemoveClass(switchBtn, 'remove', 'slide-2')

//     html.setAttribute('color-mode', 'blue-mode')
//     addOrRemoveClass(body, 'remove', 'purple-mode')
//     addOrRemoveClass(resultScreen, 'remove', 'purple-mode')    

//     input.forEach(btn => {
//         addOrRemoveClass(btn, 'remove', 'purple-mode-key')
//     })
//     addOrRemoveClass(body, 'remove', 'purple-mode-body')
//     addOrRemoveClass(equalBtn, 'remove', 'purple-mode-equal')
// }

// let lightMode = () => {
//     addOrRemoveClass(switchBtn, 'add', 'slide-1')
  
//     html.setAttribute('color-mode', 'light')
//     addOrRemoveClass(body, 'add', 'light-mode')
//     addOrRemoveClass(resultScreen, 'add', 'light-mode')
  
//     input.forEach(btn => {
//         addOrRemoveClass(btn, 'remove', 'blue-mode-key')
//     })
//     addOrRemoveClass(body, 'remove', 'blue-mode-body')
//     addOrRemoveClass(equalBtn, 'remove', 'blue-mode-equal')
// }

// let purpleMode = () => {
//     addOrRemoveClass(switchBtn, 'add', 'slide-2')
//     addOrRemoveClass(switchBtn, 'remove', 'slide-1' )
  
//     html.setAttribute('color-mode', 'purple-mode')
//     input.forEach(btn => {
//         addOrRemoveClass(btn, 'add', 'purple-mode-key')
//     })
//     addOrRemoveClass(body, 'add', 'purple-mode-body')
//     addOrRemoveClass(equalBtn, 'add', 'purple-mode-equal')
  
//     addOrRemoveClass(body, 'remove', 'light-mode')
//     addOrRemoveClass(resultScreen, 'remove', 'light-mode')
// }

// let toggleColorMode = () => {
//     if (switchBtn.classList.contains('slide-1')) {
//         lightMode()
//     }  if (switchBtn.classList.contains('slide-2')) {
//         purpleMode()
//     } if (!switchBtn.classList.contains('')) {
//         blueMode()
//     }
// }

// switchBtn.addEventListener('click', toggleColorMode)
