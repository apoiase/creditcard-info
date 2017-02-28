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
