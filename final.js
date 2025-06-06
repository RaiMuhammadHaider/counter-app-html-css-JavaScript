let value = document.getElementById('value')
let btns = document.querySelectorAll('.btn')
let counter = 0
btns.forEach(function (btn) {
    btn.addEventListener('click',function (e) {
        let styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            counter--
        }
        else if (styles.contains('increase')) {
            counter++
        }
        else{
            counter= 0
        }
        
        
        value.textContent = counter
    })
    
})