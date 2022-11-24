
let buttonDrop = document.querySelectorAll('[data-drop-control]')
for (let i = 0; i < buttonDrop.length; i++) {
    buttonDrop[i].addEventListener('click', function () {
        let valueButtonDrop = buttonDrop[i].getAttribute('data-drop-control')
        document.getElementById(valueButtonDrop).classList.toggle('text-drop')
        document.getElementById(valueButtonDrop).classList.toggle('animation-text-drop-in')
        buttonDrop[i].classList.toggle('button-angular-toggle')
    })
}

let modalButton = document.querySelectorAll('[data-modal-control]')
for (let i = 0; i < modalButton.length; i++){
    modalButton[i].addEventListener('click', function(e){
        // e.preventDefault()
        let valueModalButton = modalButton[i].getAttribute('data-modal-control')
        document.getElementById(valueModalButton).classList.toggle('modal-off')
    })
}