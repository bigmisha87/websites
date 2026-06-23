# marble_simulator

A Galton-board style marble physics simulator built with [Matter.js](https://brm.io/matter-js/).
The whole app is a single self-contained `index.html` (open it in a browser, or serve it via GitHub Pages).

## Fixed canvas size

The simulation renders at a **fixed pixel size** rather than stretching to the browser window.
The size is controlled by two constants near the top of the inline script:

```js
var FIXED_W = 1000, FIXED_H = 680;
```

The canvas is centered and **uniformly scaled down** to fit smaller screens — it is never scaled up
beyond its true size, so on a large enough screen you see the exact pixel dimensions, and on smaller
screens it shrinks proportionally (no horizontal scrolling, no reflow). Change the two numbers above
to resize the board; all of the geometry (walls, pegs, bins, board width) is derived from them.
