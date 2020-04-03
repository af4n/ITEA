window.addEventListener("load", function () {
    let dateObject = new Date();
    let output = document.getElementById("output");
    let tempEncode;

    if (document.cookie.length === 0) {
        output.innerHTML = "Последнее посещение страницы было " + decodeURIComponent(document.cookie);
    }
    
    document.cookie = encodeURIComponent(dateObject.toLocaleString())+"; max-age=2592000‬";
    

});