const display = document.querySelector('.result-screen')
const buttons = Array.from(document.querySelectorAll('button'))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.value = '';
                break;
            case 'DEL':
                if(display.value){
                    display.value = display.value.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Use a valid input'
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});
