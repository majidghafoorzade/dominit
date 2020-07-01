# dominit
Simple Object to DOM Element generator for JavaScript

## Simple usage example:

```html

<div id="app"></div>


<script src="/path/to/dominit.min.js"></script>
<script>
var appDOM = {
  el: 'div',
  attrs: {
    class: 'post-body'
  },
  children: [
    {
      el: 'h1',
      text: 'Post title'
    }
  ]
};
  
const App = document.getElementById("app");
const dominitize = new Dominitize(
  App,
  appDOM
);
</script>
```
