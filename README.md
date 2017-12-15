## babel-plugin-remove-style-imports

A simple Babel plugin that will remove any imports to a `(s)css` file from the AST

this:
```js
import from './styles.scss';
import another from './another';

export class SomClass {
    constructor() {
        const object = {};
    }
}
```

will become this:
```js
import another from './another';

export class SomClass {
    constructor() {
        const object = {};
    }
}
```

by calling
```sh
$ babel --plugins=remove-style-imports ./index.js
```

