'use strict';

let output = document.getElementById('output');
let buttons = document.querySelectorAll('input');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        switch (buttons[i].value) {
            case 'AC':
                output.innerText = '';
                break;
            case '=':
                try {
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = 'Error';
                }
                break;
            default:
                output.innerText += buttons[i].value;
        }
    });
}





