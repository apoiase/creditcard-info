
## About

This module is used to validate credit card numbers and get the brand from input. It can say many brands from Brazil.

## Install
With npm do:

```
npm install creditcard-warder --save
```

## Credit Card Brands

#### Globals
* visa
* master
* amex
* dinersclub
* discover
* unionpay
* jcb
* forbrugsforeningen
* dankort

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
Links:
- [creditcard-warder.js](https://raw.githubusercontent.com/apoiase/creditcard-info/gh-pages/dist/creditcard-warder.js)
- [creditcard-warder.min.js](https://raw.githubusercontent.com/apoiase/creditcard-info/gh-pages/dist/creditcard-warder.min.js)

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
