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

    constructor(brand = null, model = null, yearOfManufacturing = null, maxSpeed = null, maxFuelVolume = null, fuelConsumption = null) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.maxSpeed = maxSpeed;
        this.maxFuelVolume = maxFuelVolume;
        this.fuelConsumption = fuelConsumption;
    }

    get brand() {
        if (this.#brand === null) {
            throw new Error('brand not set');
        }
        return this.#brand;
    }
    set brand(brand) {
        if (brand === null && this.#brand === null) {
            return;
        }
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
        if (model === null && this.#model === null) {
            return;
        }
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
        if (year === null && this.#yearOfManufacturing === null) {
            return;
        }
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
        if (speed === null && this.#maxSpeed === null) {
            return;
        }
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
        if (value === null && this.#maxFuelVolume === null) {
            return;
        }
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
        if (value === null && this.#fuelConsumption === null) {
            return;
        }
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
            throw new Error('???????????? ?????? ????????????????');
        }

        this.#isStarted = !this.isStarted;
    }

    shutDownEngine() {
        if (!this.isStarted) {
            throw new Error('???????????? ?????? ???? ????????????????');
        }

        this.#isStarted = !this.isStarted;
    }

    fillUpGasTank(valueOfFuelInLiters) {
        if ((typeof valueOfFuelInLiters !== 'number') || (valueOfFuelInLiters <= 0)) {
            throw new Error('???????????????? ???????????????????? ?????????????? ?????? ????????????????');
        } else if (valueOfFuelInLiters + this.currentFuelVolume > this.maxFuelVolume) {
            throw new Error('?????????????????? ?????? ????????????????????');
        }

        this.#currentFuelVolume += valueOfFuelInLiters;
    }

    drive(speed, timeInHours) {
        const distance = speed * timeInHours;
        const consumption = (distance * this.fuelConsumption) / 100;

        if ((typeof speed !== 'number') || (speed <= 0)) {
            throw new Error('???????????????? ????????????????');
        } else if ((typeof timeInHours !== 'number') || (timeInHours <= 0)) {
            throw new Error('???????????????? ???????????????????? ??????????');
        } else if (speed > this.maxSpeed) {
            throw new Error('???????????? ???? ?????????? ?????????? ?????? ????????????');
        } else if (!this.isStarted) {
            throw new Error('???????????? ???????????? ???????? ????????????????, ?????????? ??????????');
        } else if (consumption > this.currentFuelVolume) {
            throw new Error('???????????????????????? ??????????????');
        }

        this.#currentFuelVolume -= consumption;
        this.#mileage += distance;
    }

}

module.exports = Car;