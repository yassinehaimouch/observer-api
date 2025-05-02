## Mutation Observer

```js
function callback(mutations) {}

let observer = new MutationObserver(callback);

let observerOptions = {
  childList: false,
  attributes: false,
  characterData: true,
  subtree: false,
  attributeFilter: ["one", "two"],
};

observer.observe(targetNode, observerOptions);
```

### When we can need it?

1 - Rich Text Editors \
2 - Drawing Tools
