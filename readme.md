# *css.of*

*A lightweight, dependency free node.js package for creating css strings out of javascript objects.*

### *Features*

- Supports deep nesting;
- Supports all css statements (yes, including at rules!);
- Custom indentation;
- Returns clean, vanilla css.

### *Installation*

Run `npm i css.of` in the command line.

### *Usage*

```javascript
const css = require('css.of');

const obj  = {
  '@charset': '"utf-8"',
  '@import': 'url(custom.css)',
  'body': {
    'font': '14px/1.2 sans-serif',
    'color': 'pink',
    'background': '#e3e3e3'
  },
  '#menu nav': {
    'display': 'flex',
    'width': '100%',
    'margin': '30px',
    'border': '1px solid #000'
  },
  '.title': {
    'font-size': '1.5em'
  },
  '@media (min-width: 480px)': {
    'header': {
      'position': 'absolute',
      'top': '0',
      'background': 'rgba(0, 0, 0, .3)'
    },
    'footer': {
      'font-style': 'italic',
      'background': 'black'
    }
  }
};

console.log(css.of(obj));
```

the above code will return...

```css
@charset "utf-8";
@import url(custom.css);
body {
  font: 14px/1.2 sans-serif;
  color: pink;
  background: #e3e3e3;
}
#menu nav {
  display: flex;
  width: 100%;
  margin: 30px;
  border: 1px solid #000;
}
.title {
  font-size: 1.5em;
}
@media (min-width: 480px) {
  header {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, .3);
  }
  footer {
    font-style: italic;
    background: black;
  }
}
```

#### *Function*
```javascript
css.of(obj = {}, tab = '\t');
```

#### *Parameters*
##### *obj*
*<object\> to create a css string out of*
##### *tab*
*<string\> for custom indentation; the default value is `\t`*

#### *Return Value*
##### *css*
*<string\> with valid css syntax*

### *License*
*MIT &copy; 2018 Paula Griguță <paula.la@live.com>*
