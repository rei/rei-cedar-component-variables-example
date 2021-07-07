Component Variables Example Project
-------------------------------------

This project is meant to be a template for and demonstration of using [@rei/cdr-tokens](https://github.com/rei/rei-cedar-tokens) and [@rei/cdr-component-variables](https://github.com/rei/rei-cedar-component-variables) to generate a custom stylesheet. This is intended to support use cases where the Cedar Vue.js components either cannot or should not be used.

This project may be useful for applying Cedar styles to a third party site for which the HTML markup cannot be modified. It may also be useful for creating stylesheets for things like advertisements, banner messaging, and other situations where code is injected into arbitrary pages.

## Development

The main file you will edit is `/src/index.scss`. This file is currently set up to import the Cedar tokens and component variables and applies them to a few generic CSS selectors. See the [Cedar tokens](https://rei.github.io/rei-cedar-docs/tokens/all-tokens/) and [Cedar component variables](https://rei.github.io/rei-cedar-docs/components/component-variables/) docs pages for an overview of the options available and how they should be applied.

Once your stylesheet is defined, run `npm run build` to process it and output the compiled styles to `dist/index.css`. This file can then be copied and loaded on any page as needed.

Note that tokens and component variables should always be applied semantically, for example a token that begins with `cdr-color-background-` should only ever be applied to the background color of an element and should never be used to style a border or text color. Similarly, a component variables mixin that beings with `cdr-button-` should only ever be applied to a button element.

## Build

This project uses `node-sass` and `postcss` to build the SCSS file. The build config can be found in `postcss.config.js` and `build.js`.
