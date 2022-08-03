/**
 * Implementing a restaurant menu
 */

class Menu {

    constructor() {

        this.categories = {

            breakfast: [],
            main: [],
            deserts: []
        }

    }

    addBreakfast(dish) {

        this.categories.breakfast.push(dish)
    }

    addDish(category, dish) {

        this.categories[category].push(dish)

    }

    listDishes(category) {

        this.categories[category].forEach(element => {
            console.log('Items for', category, 'is', element)
        });
    }

}

const menu = new Menu()

console.log('menu just created is', menu);

menu.addBreakfast({name: 'european', price: 10})
menu.addDish('breakfast', {name: 'american', price: 11})
menu.addDish('main', 'steak')
menu.addDish('deserts', 'cream brule')
menu.addDish('deserts', 'baklava')
console.log('menu is', menu);

menu.listDishes('breakfast')

class MenuV2 {

    constructor() {
        this.dishes = [
            {
                name: '',
                category: 'breakfast',
                price: 0
            }
        ]
    }
}

class AdoptingPets {

    constructor() {

        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adoptAnimal() {

    }
}

class Animal {
    constructor(type, age, vaccinated, condition) {

        this.type = type
        this.age = age
        
    }
}

const shirsAdoptingPets = new AdoptingPets()

const jane = new Animal('dog', 5)
const peter = new Animal('lizzard', 1)

shirsAdoptingPets.addAnimal(jane)
shirsAdoptingPets.addAnimal(peter)

console.log(shirsAdoptingPets);
