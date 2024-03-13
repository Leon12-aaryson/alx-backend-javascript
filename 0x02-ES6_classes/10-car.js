export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Cloning the class
  cloneCar() {
    const CarCloneObj = this.constructor || [Symbol.species];
    return new CarCloneObj();
  }
};
