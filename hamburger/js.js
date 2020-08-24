class Hamburger {
    constructor(size, price, stuffing, calories) {
        this.size = size;
        this.price = price;
        this.toppings = []; // список возможных добавов
        this.stuffing = []; // начинка бургера
        this.calories = calories;

        this.getToppings();
        this.add();

    }
        
    addTopping(id) { 
        let find = this.toppings.find(el => el.id == id);
        this.stuffing.push(find);
    }    
    removeTopping(id) {
        let index = this.stuffing.findIndex(el => el.id == id);
        if (index !== -1) this.stuffing.splice(index, 1);
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
        let price = this.stuffing.reduce( (total, el) => {
            return total + el.price;
        }, this.price);
        console.log(price);
        
    }       
    calculateCalories() {
        return this.calories;
    }

    add() {
        this.addTopping(2);
        this.addTopping(3);
        this.calculatePrice();
    }

}

let big = new Hamburger('big', 100,  'sol', 40);
let small = new Hamburger('small', 50,  'sol', 20);