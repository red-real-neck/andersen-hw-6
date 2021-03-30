class Car {
    #brand = null;
    #model = null;
    #yearOfManufacturing = null;
    #maxSpeed = null;
    #maxFuelVolume = null;
    #fuelConsumption = null;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        if (this.#brand === null) {
            throw new Error('brand not set');
        }
        return this.#brand;
    }
    set brand(brand) {
        if (typeof brand !== 'string') {
            throw new Error('string expected');
        } else if (brand.length > 50) {
            throw new Error('brand can`t be longer than 50 characters');
        }

        this.#brand = brand;
    }

    get model() {
        if (this.#model === null) {
            throw new Error('model not set');
        }
        return this.#model;
    }
    set model(model) {
        if (typeof model !== 'string') {
            throw new Error('string expected');
        } else if (model.length > 50) {
            throw new Error('model can`t be longer than 50 characters');
        }

        this.#model = model;
    }

    get yearOfManufacturing() {
        if (this.#yearOfManufacturing === null) {
            throw new Error('year of manufacturing not set');
        }
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(year) {
        if (typeof year !== 'number') {
            throw new Error('number expected');
        } else if (year < 1900 || year > new Date().getFullYear()) {
            throw new Error('incorrect year');
        }

        this.#yearOfManufacturing = year;
    }

    get maxSpeed() {
        if (this.#maxSpeed === null) {
            throw new Error('max speed not set');
        }
        return this.#maxSpeed;
    }
    set maxSpeed(speed) {
        if (typeof speed !== 'number') {
            throw new Error('number expected');
        } else if (speed < 100 || speed > 300) {
            throw new Error('speed value must be more than 100 and less then 300');
        }

        this.#maxSpeed = speed;
    }

    get maxFuelVolume() {
        if (this.#maxFuelVolume === null) {
            throw new Error('max fuel volume not set');
        }
        return this.#maxFuelVolume;
    }
    set maxFuelVolume(value) {
        if (typeof value !== 'number') {
            throw new Error('number expected');
        } else if (value < 5 || value > 20) {
            throw new Error('max fuel volume must be more than 5 and less then 20');
        }

        this.#maxFuelVolume = value;
    }

    get fuelConsumption() {
        if (this.#fuelConsumption === null) {
            throw new Error('fuel consumption not set');
        }
        return this.#fuelConsumption;
    }
    set fuelConsumption(value) {
        if (typeof value !== 'number') {
            throw new Error('number expected');
        } else if (value <= 0) {
            throw new Error('incorrect value');
        }

        this.#fuelConsumption = value;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.isStarted) {
            throw new Error('Машина уже заведена');
        }

        this.#isStarted = !this.isStarted;
    }

    shutDownEngine() {
        if (!this.isStarted) {
            throw new Error('Машина ещё не заведена');
        }

        this.#isStarted = !this.isStarted;
    }

    fillUpGasTank(valueOfFuelInLiters) {
        if ((typeof valueOfFuelInLiters !== 'number') || (valueOfFuelInLiters <= 0)) {
            throw new Error('Неверное количество топлива для заправки');
        } else if (valueOfFuelInLiters + this.currentFuelVolume > this.maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += valueOfFuelInLiters;
    }

    drive(speed, timeInHours) {
        const distance = speed * timeInHours;
        const consumption = (distance * this.fuelConsumption) / 100;

        if ((typeof speed !== 'number') || (speed <= 0)) {
            throw new Error('Неверная скорость');
        } else if ((typeof timeInHours !== 'number') || (timeInHours <= 0)) {
            throw new Error('Неверное количество часов');
        } else if (speed > this.maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        } else if (!this.isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        } else if (consumption > this.currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this.#currentFuelVolume -= consumption;
        this.#mileage += distance;
    }

}

module.exports = Car;