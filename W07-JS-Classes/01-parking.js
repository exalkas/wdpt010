/**
 * Class Parking when created we get the number of slots available
 */

class Parking {

    constructor(size) {

        this.parking = []

        this.maxSpaces = size
    }

    addCar(plates) {

        // if (this.parking.length < this.maxSpaces) {

        //     this.parking.push(plates)
        // } else {
        //     console.log('Parking is full')
        // }

        if (this.checkParkingfull()) {
            console.log('Parking is full')
        } else {
            this.parking.push(plates)
        }

    }

    listCars() {
        return this.parking
    }

    deleteCar(plates) {

        const idx = this.parking.indexOf(plates)

        this.parking.splice(idx, 1)
    }

    checkParkingfull() {

        if (this.parking.length >= this.maxSpaces) {
            return true
        } else {

            return false
        }

    }
}

const berlinParking = new Parking(3);


berlinParking.addCar('abc')
berlinParking.addCar('cde')
berlinParking.addCar('a123')
berlinParking.addCar('567')
console.log('berling parking is', berlinParking)

berlinParking.deleteCar('cde')

console.log('Cars inside our parking: ', berlinParking.listCars());