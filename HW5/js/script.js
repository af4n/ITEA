window.addEventListener("DOMContentLoaded", (e) => {

    const grayBtns = document.querySelectorAll('.gray'),
        pinkBtns = document.querySelectorAll('.pink'),
        blackBtns = document.querySelectorAll('.black'),
        orangeBtns = document.querySelectorAll('.orange'),
        keysBtn = document.getElementsByClassName('keys')[0];

    for (let i=0; i<pinkBtns.length; i++) {
        const pinkBtn = pinkBtns[i];
        pinkBtn.addEventListener('click', (e) => {
            e.target.value;
            console.log(e.target.value)

        })
    }

    for (let i=0; i<blackBtns.length; i++){
        const blackBtn = blackBtns[i];
        blackBtn.addEventListener('click', (e) => {
            e.target.value;
            console.log(e.target.value)
        });
    };

/*    const decimal = keysBtn.addEventListener('click', (e) => {
        // e.target.value;
        if (e.target.value !== '.') {

        }
        else {
            decimalPress();
        }
        // console.log(e.target.value);
    });

    const clear = keysBtn.addEventListener('click', (e) => {
        // e.target.value;
        if (e.target.value !== 'C') {

        }
        else {
            clearPress();
        }
        // console.log(e.target.value);
    }); */

    const result = keysBtn.addEventListener('click', (e) => {
        if (e.target.value !== '=') {

        }
        else {
            console.log(e.target.value)
        }
    })

    function operationPress() {
        console.log('Клик ');
    }

    function numberPress() {
        if (this.value === '.' || this.value === 'C')  {

        }
        else {
            console.log('Клик ');
        }
    };

    function decimalPress() {
        console.log('Клик по .')
    }

    function clearPress() {
        console.log('Клик по С')
    }

    function resultPress() {
        console.log('Клик по =')
    }
});


    // const keys = document.getElementsByClassName("keys")[0];

    // keys.addEventListener("click", (e) => {
        
    //     e.target.value;
    //     const dInput = document.querySelector('.display > input'); 
      
    //     if (e.target.value == '*') {
            
    //     }
    //     else if (e.target.value == '/') {

    //     }
    //     else if (e.target.value == '+') {

    //     }
    //     else if (e.target.value == '-') {

    //     }
    //     else {
    //         dInput.value = e.target.value;
    //     }
    // })