# creditcard-warder

![Version badge](http://img.badgesize.io/apoiase/creditcard-warder/refactor/dist/creditcard-warder.min.js.svg)

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
* ELO
* Hipercard
* Aura
* Visa Electron
* Maestro

## Usage

```javascript
var creditcard = require('creditcard-warder');

var card = creditcard('4514166365215946')
card.getBrand(); // elo
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
