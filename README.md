# creditcard-warder

![Size badge](http://img.badgesize.io/apoiase/creditcard-warder/master/dist/creditcard-warder.min.js.svg) ![Version badge](https://img.shields.io/npm/v/creditcard-warder.svg)

## About

This module is used to validate credit card numbers and get the brand from input. It can say many brands from Brazil.

## Install
With npm do:

```
npm install creditcard-warder --save
```

## Credit Card Brands

#### Globals
* Visa
* Mastercard
* Amex
* Dinersclub
* Discover
* Unionpay
* JCB
* Forbrugsforeningen
* Dankort

#### Brazil
* Hipercard
* Aura
* Visa Electron
* Maestro

among others.

## Usage

```javascript
var creditcard = require('creditcard-warder');

var card = creditcard('4514166365215946')
card.getBrand(); // forbrugsforeningen
card.validate(); // true
```

#### Usage in browser with browserify
CDN latest version:
- [creditcard-warder.min.js](https://unpkg.com/creditcard-warder)

#### Build with browserify
```
npm run build
npm run watch
```

### Test
```
npm run test
npm run test-browser
```
