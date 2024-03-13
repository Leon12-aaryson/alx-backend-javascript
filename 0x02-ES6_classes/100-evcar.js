import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const CloneCarObj = super.constructor || super[Symbol.species];
    return new CloneCarObj();
  }
};
