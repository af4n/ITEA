window.onload = function () {

//    document.getElementById("btnGet").onclick = function () {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")

        xhr.onreadystatechange = function () {
            
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    //document.querySelector("output").innerHTML = "Имя валюты - " + data.txt + ", Продажа  - " + data.rate;
                    //document.querySelector("output").innerHTML += xhr.responseText;
                    data.forEach( function (value, index, array) {
                        document.querySelector("output").innerHTML = `Имя валюты ${value.txt} Продажа ${value.rate}`;
                        document.querySelector("output").innerHTML = `Имя валюты ${value.txt} Продажа ${value.rate}`;
                        document.querySelector("output").innerHTML = `Имя валюты ${value.txt} Продажа ${value.rate}`;
                    })
                }
            }
        }
        xhr.send();
//    }
}