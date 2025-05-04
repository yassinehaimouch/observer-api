## Resize Observer

```js
const callback = () => {};
const observer = new ResizeObserver(callback);

const observerOptions = {
  box: "content-box" | "border-box",
};

observer.observe(document.body, observerOptions);
```

### When we can need it?

1 - Allows to change the appearance of the ui based on container size. \
2 - Allows to run a JS callback on resize.

## Comparison

|                     |           Performance            | Callback | Element Tracking |
| :------------------ | :------------------------------: | -------: | ---------------: |
| CSS Media Queries   |          Super fast ✅           |       ❌ |               ❌ |
| CSS Container Query |          Super fast ✅           |       ❌ |               ✅ |
| 'resize' event      |        Poentailly Slow ❌        |       ✅ | ❌ (window only) |
| Resize Observer     | Fast ✅ (10x faster than resize) |       ✅ |               ✅ |
