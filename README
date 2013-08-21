# dom.position

get the coordinates of the element relative to the document

## examples

mouse coordinates inside of an element

```js
var pos = require('dom.position');

div.addEventListener('mouseclick', function(ev) {
    var ppos = pos(ev.currentTarget);

    var x = ev.clientX - ppos.left;
    var y = ev.clientY - ppos.top;

    // coordinates {x,y} are relative to the click container
});
```
