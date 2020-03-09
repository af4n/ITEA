window.addEventListener("DOMContentLoaded", (e) => {

    const blackBtns = document.getElementsByClassName('black'),
        pinkBtns = document.getElementsByClassName('pink'),
        grayBtns = document.getElementsByClassName('gray'),
        display = document.querySelector('.display > input');
        
    let MemoryCurrentNumber = 0,
        MemoryNewNumber = false,
        MemoryPendingOperation = '';

    for (let i=0; i<blackBtns.length; i++){
        const blackBtn = blackBtns[i];
        blackBtn.addEventListener('click', function (e) {
            numberPress(e.target.value);

            if (e.target.value === 'C') {
                display.value = '0';
                MemoryCurrentNumber = 0;
                MemoryNewNumber = true;
                MemoryPendingOperation = '';
            };

            console.log(e.target.value);
        });
    };

    for (let i=0; i<pinkBtns.length; i++){
        const pinkBtn = pinkBtns[i];
        pinkBtn.addEventListener('click', function (e) {
            operationPress(e.target.value);

            console.log(e.target.value);
        });
    };

    for (let i=0; i<grayBtns.length; i++){
        const grayBtn = grayBtns[i];
        grayBtn.addEventListener('click', function (e) {
            
            if (e.target.value === 'mrc') {
                display.value = '0';
                MemoryCurrentNumber = 0;
                MemoryNewNumber = true;
                MemoryPendingOperation = '';
            };

            console.log(e.target.value);
        });
    };


    function numberPress(blackBtn) {
        if (MemoryNewNumber) {
            display.value = blackBtn;
            MemoryNewNumber = false;
        } else {
            if (display.value === '0') {
                display.value = blackBtn; 
            } else {
                display.value += blackBtn;
            }
        };
    };

    function operationPress(pinkBtn) {
        let localOperationMemory = display.value;

        if (MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.value = MemoryCurrentNumber;
        } else {
            MemoryNewNumber = true;
            if (MemoryPendingOperation === '/') {
                MemoryCurrentNumber /= parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '*') {
                MemoryCurrentNumber *= parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '-') {
                MemoryCurrentNumber -= parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '+') {
                MemoryCurrentNumber += parseFloat(localOperationMemory);
            } else {
                MemoryCurrentNumber = parseFloat(localOperationMemory);
            };

            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = pinkBtn;
        };
    };
});





















/*    function decimalPress(argument) {
        let localDecimaMemory = display.value;

        if (MemoryNewNumber) {
            localDecimaMemory = '0.';
            MemoryNewNumber = false;
        } else {
            if(localDecimaMemory.indexOf('.') === -1) {
                localDecimaMemory += '.';
            }
        }

        display.value = localDecimaMemory;
        console.log('Клик по .')
    };


/*    function resultPress(orangeBtn) {
        //let localOperationMemory = display.value;
        if (MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.value = MemoryCurrentNumber;
        } //else {
           // MemoryCurrentNumber = parseFloat(localOperationMemory);
        //};
        
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = orangeBtn;
    };*/

    /*const pinkBtn = document.addEventListener('click', (e) => {
        console.log(e.target.value);
    })*/

    /*for (let i=0; i<pinkBtns.length; i++) {
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
    };*/

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


    /*const result = keysBtn.addEventListener('click', (e) => {
        if (e.target.value !== '=') {

        }
        else {
            console.log(e.target.value)
        }
    })*/

//     function decimalPress() {
//         console.log('Клик по .')
//     }

//     function clearPress() {
//         console.log('Клик по С')
//     }

//     function resultPress() {
//         console.log('Клик по =')
//     }


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
    //     };