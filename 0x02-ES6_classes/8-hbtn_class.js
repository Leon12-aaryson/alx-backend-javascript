export default class HolbertonClass {
  constructor (size, location) {
    this._size = size;
    this._location = location;
  }

  [ Symbol.toPrimitive ](atr) {
    if (atr === 'string') {
      return `${this._location}`;
    }
    return `${this._size}`;
  }
};
