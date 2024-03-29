# Autism
## Baron-Cohen (2001)
```js
const autism = require('autism');

// Each item:
// 0: Definitely agree
// 1: Slightly agree
// 2: Slightly disagree
// 3: Definitely disagree
const selects = new Array(50).fill(null).map(_ => Math.floor(Math.random() * 4));

const score = autism.BaronCohen2001.computeAQ(selects);
console.log(score);
```