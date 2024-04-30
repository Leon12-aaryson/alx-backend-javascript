import Currency from './3-currency';

export default class Pricing {
  constructor (amount, currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
    this._amount = amount;
  }

  get amount () {
    return this._amount;
  }

  set amount (amount) {
    this._amount = amount;
  }

  get currency () {
    return this._currency;
  }

  set currency (currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
