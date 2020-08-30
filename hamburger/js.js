class Hamburger {
    constructor(size, price, stuffing, calories) {
        this.size = size;
        this.price = price;
        this.toppings = []; // список возможных добавов
        this.stuffing = []; // начинка бургера
        this.calories = calories;
        this.toppingsList = document.querySelector('#toppingsList');
        this.handleActions();

        this.getToppings();
        this.getStuffing(stuffing);
        this.calculatePrice();
        this.calculateCalories();
    }
    handleActions() {
        this.toppingsList.addEventListener('click', event => {
            if (event.target.dataset.control == 'control') {
                console.log(event.target.dataset.id);
            }
            
        });
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
    getStuffing(id) {
        let find = this.toppings.find(el => el.id == id);
        this.stuffing.push(find);
    }          
    calculatePrice() {
        let totalPrice = document.querySelector('#totalPrice'); 
        let price = this.stuffing.reduce( (total, el) => {
            return total + el.price;
        }, this.price);

        totalPrice.innerHTML = price;
    }       
    calculateCalories() {
        let totalCalories = document.querySelector('#totalCalories'); 
        let calories = this.stuffing.reduce( (total, el) => {
            return total + el.calories;
        }, this.calories);
        totalCalories.innerHTML = calories;
    }

}

let big = new Hamburger('big', 100, 2, 40);
// let small = new Hamburger('small', 50, 2, 20);