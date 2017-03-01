# Credit Card Brands

## Globals
* visa
* master
* amex
* dinersclub
* discover
* unionpay
* jcb
* forbrugsforeningen
* dankort

## Brazil
* ELO
* Hipercard
* Aura
* Visa Electron
* Maestro

## Using like javascript library
Links:
- [creditcard-info.js](https://raw.githubusercontent.com/apoiase/creditcard-info/gh-pages/dist/creditcard-info.js)
- [creditcard-info.min.js](https://raw.githubusercontent.com/apoiase/creditcard-info/gh-pages/dist/creditcard-info.min.js)

## Using like npm package

```
npm i creditcard-info
```

```javascript
var creditcardsInfo = require('creditcard-info');

var card = creditcardsInfo('4514166365215946')
card.getBrand(); // elo
card.validate(); // true
```

### Build
```
npm run build
npm run watch
```

### Test
```
npm run test
npm run test-browser
```
