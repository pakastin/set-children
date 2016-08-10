# setChildren
reorder/replace DOM element children easily

## installation
```
npm install set-children
```

## usage (ES2015)
```js
import setChildren from 'set-children';

var h1 = document.createElement('h1');
var p = document.createElement('p');

h1.textContent = 'Hello world!';
p.textContent = 'Lorem ipsum';

setChildren(document.body, [
  h1, p
]);
```

## usage (CommonJS)
```js
var setChildren = require('set-children');

var h1 = document.createElement('h1');
var p = document.createElement('p');

h1.textContent = 'Hello world!';
p.textContent = 'Lorem ipsum';

setChildren(document.body, [
  h1, p
]);
```

## usage (oldskool)
```html
<script src="set-children.min.js"></script>
<script>
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  
  h1.textContent = 'Hello world!';
  p.textContent = 'Lorem ipsum';
  
  setChildren(document.body, [
    h1, p
  ]);
</script>
```
