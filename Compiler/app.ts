console.log('Time to get started...');

const button = document.querySelector('button');

function clickHandler(msg: string): void {
    console.log(msg);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello'))
}