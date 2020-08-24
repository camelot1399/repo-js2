class Hamburger {
    constructor(size, price, stuffing, calories) {
        this.size = size;
        this.price = price;
        this.toppings = [];
        this.haveTopping = [];
        this.stuffing = [];
        this.calories = calories;

        this.getToppings();
    }
        
    addTopping(topping) { 
    // Добавить добавку
    }    
    removeTopping(topping) {
    // Убрать добавку
    } 
    getToppings(topping) {
        this.toppings = [
            {id: 1, title: 'Приправа', price: 15, calories: 0},
            {id: 2, title: 'Сыр', price: 10, calories: 20},
            {id: 3, title: 'Салат', price: 20, calories: 5},
            {id: 4, title: 'Картофель', price: 15, calories: 10},
            {id: 5, title: 'Майонез', price: 20, calories: 5}
        ];
    }   
    getSize() {
        return this.size;
    }              
    getStuffing() {
        return this.stuffing;    
    }          
    calculatePrice() {
        return this.price;
    }       
    calculateCalories() {
        return this.calories;
    }    

}

let big = new Hamburger('big', 100,  'sol', 40);
let small = new Hamburger('small', 50,  'sol', 20);