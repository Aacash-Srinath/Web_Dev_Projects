const inputs = document.querySelectorAll('.otp-card-inputs input')
const button = document.querySelector('.otp-card button')

inputs.forEach((input, index1) => {
    let lastInputStatus = 0
    input.onkeyup = (e) => {
        const currentElement = e.target
        const nextElement = input.nextElementSibling
        const prevElement = input.previousElementSibling

        if (prevElement && e.keycode === 8){
            if (lastInputStatus === 1){
                prevElement.value = ''
                prevElement.focus()
            }
            button.setAttribute('disabled', true)
            lastInputStatus = 1
        }
        else{
            const reg = /^[0-9]+$/
            if (!reg.test(currentElement.value)){
                currentElement.value = currentElement.value.replace(/\D/g, '')
            }
            else if (!currentElement.value){
                nextElement.setAttribute('disabled', true)
                currentElement.focus()
            }
            else if (currentElement.value){
                if (nextElement){
                    nextElement.focus()
                }
                else{
                    button.removeAttribute('disabled')
                    lastInputStatus = 0
                }
            }
            if (e.key === "Backspace") {
                inputs.forEach((input, index2) => {
                    if (index1 <= index2 && prevElement) {
                        input.value = "";
                        prevElement.focus();
                    }
                    else if (!prevElement) {
                        input.value = "";
                        prevElement.focus();
                    }
                }); 
            }
        }
    }
})
