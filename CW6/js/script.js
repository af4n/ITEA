window.addEventListener("DOMContentLoaded", (e) => {

    const sousA = document.getElementsByClassName('sous'),
        toppingA = document.getElementsByClassName('topping'),
        sizeA = document.getElementsByClassName('size');
        
    for (let i=0; i<sousA.length; i++) {
        const sous = sousA[i];
        sous.addEventListener('click', function (e) {
            console.log(sous.dataset.info);
            document.querySelector('.price > h2').innerHTML += sous.dataset.info;
            
        });
    };

    for (let i=0; i<toppingA.length; i++) {
        const topping = toppingA[i];
        topping.addEventListener('click', function (e) {
            console.log(topping.dataset.info);
            document.querySelector('.price > h2').innerHTML += topping.dataset.info;
        })
    };

    for (let i=0; i<sizeA.length; i++) {
        const size = sizeA[i];
        size.addEventListener('click', function (e) {
            console.log(size.dataset.info);
            document.querySelector('.price > h2').innerHTML += size.dataset.info;
        })
    };

});
