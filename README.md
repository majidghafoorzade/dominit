# dominit
Simple Object to DOM Element generator for JavaScript

Writing an Javascript object, convert it to DOM element simply using Dominit!

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
const dominit = new Dominit(
  App,
  appDOM
);
dominit.render();
</script>
```

Result of above code will be:
```html

<div id="app">
  <div class="post-body">
    <h1>Post title</h1>
  </div>
</div>
```




