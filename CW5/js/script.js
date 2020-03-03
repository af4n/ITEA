window.addEventListener("DOMContentLoaded", (e) => {

    const grayBtns = document.querySelectorAll('.gray'),
        pinkBtns = document.querySelectorAll('.pink'),
        blackBtns = document.querySelectorAll('.black'),
        orangeBtns = document.querySelectorAll('.orange');

    for (let i=0; i<blackBtns.length; i++){
        const blackBtn = blackBtns[i];
        blackBtn.addEventListener('click', numberPress);
    };

    function numberPress() {
        console.log('Клик ');
    };

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