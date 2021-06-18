# Websites Enhancer WebExtension

## Installation:

Clone this repository, then `npm install`.


## Available commands:

### `npm run dev`

Runs the extension in development mode. See Parcel's [official docs](https://v2.parceljs.org/recipes/web-extension/).


### `npm run build`

Builds the WebExtension for production to the `dist/webext-prod` folder.

## How to use:

Create your own Enhancer Component by extending `ComponentBase` under the `/src/components` folder:

```JS
import ComponentBase from './base';

export default class Example extends ComponentBase
{
    getConditions()
    {
        this.requireElement( '.my-selector' );
        this.requireURL( /^https:\/\/www\.github\.com/i );

        return true;
    }

    run()
    {
        console.log( 'It Works!' );
    }
}
```

Then, import & register it in the `EnhancerModule`:

```JS
import Example from './components/example'; // <--- Import

export default class EnhancerModule
{
    /**
     * Initialize the enhancer module.
     * 
     * @return {void}
     */
    constructor()
    {
        this.components = {
            example: new Example(), // <--- Register
        };

        this.registerComponents();
    }
}
```

## Available methods:

### `Component.getConditions()`
Determines if the enhancer should run.

Should always return a value.

```JS
@return {boolean}
```

### `Component.requireElement( selector )`
Requires the page to have an element which matches the `selector` in order ro run.

Should be execute inside the `getConditions()` method.

```JS
@param {string} selector

@return {boolean}
```

### `Component.requireURL( regex )`
Requires the page to have a URL that matches the `regex` in order ro run.

Should be execute inside the `getConditions()` method.

```JS
@param {object} regex

@return {boolean}
```

### `Component.run()`
The actual code to run when the enhancer is being executed.

```JS
@return {void}
```

### `Component.find( selector )`
Find an retrieve an element in the page using a CSS selector.

```JS
@param {string} selector

@return {HTMLElement|null}
```
