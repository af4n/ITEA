
/** Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) { 
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
} 

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: 50,
    cal: 20
}
Hamburger.SIZE_LARGE = {
    price: 100,
    cal: 40
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    cal: 20
}
Hamburger.STUFFING_SALAD = {
    price: 20,
    cal: 5
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    cal: 10
}
Hamburger.TOPPING_MAYO = {
    price: 15,
    cal: 0
}
Hamburger.TOPPING_SPICE = {
    price: 20,
    cal: 5
}

/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
}

Hamburger.allowTopping = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];

/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
    for (let i = 0; i < this.getToppings().length; i++) {
        if (topping === this.getToppings()[i]) {
            this.toppings.splice(i, 1);
            break;
        }
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this.toppings;
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this.size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let ownPrice = 0;
    ownPrice += this.getSize().price;
    ownPrice += this.getStuffing().price;
    for (let key in this.getToppings()) {
        ownPrice += this.getToppings()[key].price;
    }
    return ownPrice;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    let calories = 0;
    calories += this.getSize().cal;
    calories += this.getStuffing().cal;
    for (let key in this.getToppings()) {
        calories += this.getToppings()[key].cal;
    }
    return calories;
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException (   ) { {
    
} }


// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Калории: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Цена: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Цена с майонезом: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Большой гамбургер: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Есть %d начинка", hamburger.getToppings().length); // 1



// не передали обязательные параметры
var h2 = new Hamburger(); // => HamburgerException: no size given
               
// передаем некорректные значения, добавку вместо размера
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 
// HamburgerException: duplicate topping 'TOPPING_MAYO'